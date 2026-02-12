import { getSocket } from "./index"
import type { Socket } from "socket.io-client"

let socket: Socket | null = null

export function initCardGameSocket() {
  socket = getSocket()

  socket.on("game:start", () => {
    console.log("🎮 Partie démarrée")
  })

  socket.on("game:turnResult", (data: { score: number }) => {
    console.log("🃏 Résultat du tour:", data.score)
  })

  socket.on("game:end", (data: { win: boolean }) => {
    console.log(data.win ? "🎉 Victoire" : "💀 Défaite")
  })
}

/* === ÉMISSIONS === */

export function emitPlayTurn() {
  socket?.emit("game:playTurn")
}

export function emitResetGame() {
  socket?.emit("game:reset")
}
