import express, { type Express } from "express"
import cors from "cors"

const app: Express = express()

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}))

app.use(express.json())

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" })
})

export default app
