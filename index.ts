import express from 'express';
import bodyParser from "body-parser";
import router from "./src/router/router";
import {AppDataSource} from "./src/data-source";
import cors from 'cors';
import {Server} from "socket.io";

const server = new Server(3001, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"]
    },
})

server.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`)

    socket.on("send_messages", (data) => {
        console.log(data)
    })
})
const app = express();

AppDataSource.initialize().then(() => {
    console.log('Connect Database Success')
})

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.use('', router);

// Use http://localhost:3001/ with your router definition to debug
app.listen(3001, () => {
    console.log(`Server is running http://localhost:3001`)
})
