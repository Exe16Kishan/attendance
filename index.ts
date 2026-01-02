import  express  from "express";
import { createServer } from "node:http";
import { WebSocketServer, WebSocket} from "ws"

const app = express()
const server = createServer(app)
const wss = new WebSocketServer({server})

app.use(express.json())


// POST /auth/signup
// POST /auth/login
// GET /auth/me
// POST /class
// POST /class/:id/add-student
// GET /class/:id
// GET /students
// GET /class/:id/my-attendance
// POST /attendance/start


wss.on("connection",(websocket : WebSocket)=>{
  websocket.on("message",()=>{
    websocket.send("hello")
  })

})

server.listen(8080);