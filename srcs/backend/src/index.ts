import express from "express"
import { createServer } from "http"
import { Server } from "socket.io"
import cors from "cors"

const app = express()
const server =  createServer(app)
const io = new Server(server)

const PORT = Number(process.env.PORT) || 3000;


io.on("connection", (socket) => {
  console.log("🟢 Nouveau client connecté :", socket.id);

  socket.on("join", (data) => {
    console.log("Client rejoint :", data);

    socket.join(data.group);

    socket.to(data.group).emit("message", `${data.username} a rejoint le groupe`);
  });

  socket.on("disconnect", () => {
    console.log("🔴 Client déconnecté :", socket.id);
  });
});

app.use(cors({
    origin:"http://localhost:5173",
}))

app.get("/", (req, res) => {
  res.json([{ 
    id: 1,
    name: "Rahclele",
    age: 45,
  },
  {
    id: 2,
    name: "Rivo",
    age: 40,
  }])
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))