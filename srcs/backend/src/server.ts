import { createServer } from "http"
import app from "./app.js"
import { initSocket } from "./websocket/index.js"

const PORT = Number(process.env.PORT) || 3000

const httpServer = createServer(app)

initSocket(httpServer)

httpServer.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
