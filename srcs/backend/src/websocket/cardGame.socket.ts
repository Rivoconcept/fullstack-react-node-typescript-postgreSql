import type { Server, Socket } from "socket.io"

type GameResult = {
  userId: string
  score: number
  elapsedTime: number
  status: "win" | "lose"
}

export function registerGameSocket(io: Server, socket: Socket) {

  // 🎮 Rejoindre une partie
  socket.on("game:join", (gameId: string) => {
    socket.join(`game:${gameId}`)
    console.log(`🎮 ${socket.id} joined game ${gameId}`)
  })

  // 🃏 Fin de partie
  socket.on("game:finish", (result: GameResult) => {
    console.log("🏁 Game finished:", result)

    // TODO : sauvegarde BDD (Postgres)
    // gameService.saveResult(result)

    // Broadcast aux joueurs de la partie
    io.to(`game:${result.userId}`).emit("game:result", result)
  })

  // 🔁 Replay
  socket.on("game:replay", (gameId: string) => {
    io.to(`game:${gameId}`).emit("game:restart")
  })
}
