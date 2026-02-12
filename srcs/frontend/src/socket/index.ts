import { io, Socket } from "socket.io-client"

let socket: Socket | null = null

export function getSocket(): Socket {
  if (!socket) {
    socket = io("http://localhost:3000", {
      transports: ["websocket"],
    })

    socket.on("connect", () => {
      console.log("🔌 Socket connecté:", socket?.id)
    })

    socket.on("disconnect", () => {
      console.log("🔌 Socket déconnecté")
    })
  }

  return socket
}
