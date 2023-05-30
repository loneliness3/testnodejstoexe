import express, { Request, Response } from 'express';
import parser from 'body-parser';
import http, { createServer } from 'http';
import path from 'path';
import { Socket, Server } from 'socket.io';

const port = 3000;
const app = express();
const bodyParser = parser;
const server = createServer(app)
const io = new Server(server)

// app.use(bodyParser);
app.use(express.static(path.resolve(__dirname, "public")));

io.on("connection", (socket: Socket) => {
  io.on('userActivity',function(){
    console.log('......................................')
  })
  console.log('a user connect to server')
  socket.on('sentBy', ()=>{
    console.log('efefe')
  })
  // ...
  console.log(' a user connected to the server ')
});

app.get('/',(req: Request, res: Response)=>{
    res.sendFile('index.html', { root: path.join(__dirname, 'public') });
  })

server.listen(port,()=>{
  console.log(`****SERVER LISTENING ON PORT:${port}****`)
})