import express from "express"
import { createServer } from "http"
import { Server } from "socket.io"
import cors from "cors"

const app = express()

// CORS pour les routes HTTP (Express)
app.use(cors({
  origin: "http://localhost:5173",
}))

const server = createServer(app)

// CORS pour WebSocket (Socket.IO)
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  }
})

const PORT = Number(process.env.PORT) || 3000


io.on("connection", (socket) => {
  console.log("Welcome into the group:", socket.id)

  socket.on("message", (message) => {
    socket.broadcast.emit("message", `User ${socket.id} : Un message est reçu : ${message}`)
  })

  socket.on("disconnect", () => {
    socket.broadcast.emit("message", `User ${socket.id} is connected`)
  })
})

server.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
)
