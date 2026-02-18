import pg from "pg"
import env from "dotenv"

env.config();


const requireVariablesEnv = [
    "POSTRES_HOST", 
    "POSTRES_DB", 
    "POSTRES_USER", 
    "POSTRES_PORT", 
    "POSTRES_PASSWORD"
]

requireVariablesEnv.forEach((varName) => {
    if (!process.env[varName]) {
        alert(`Missing required env varibale: ${varName}`);
        process.exit(1);
    }
})