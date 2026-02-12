// src/websocket.ts
import { Server, Socket } from "socket.io"
import { Server as HttpServer } from "http"

export function initSocket(server: HttpServer) {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
    },
  })

  io.on("connection", (socket: Socket) => {
    console.log("✅ Client connecté:", socket.id)

    socket.on("message", (message: string) => {
      console.log("📩 Message reçu:", message)

      socket.broadcast.emit(
        "message",
        `User ${socket.id} : ${message}`
      )
    })

    socket.on("disconnect", () => {
      console.log("❌ Client déconnecté:", socket.id)

      socket.broadcast.emit(
        "message",
        `User ${socket.id} s'est déconnecté`
      )
    })
  })

  return io
}
