/* import http from 'http';
import cors from 'cors';
import express from "express";

import {Server as SocketServer} from 'socket.io';


import { userRouter } from "./users/infrastructure/UserRouter";
import { rotoplasRouter } from "./rotoplas/infrastructure/rotoplasRouter";
import { cisternaRouter } from "./cisterna/infrastructure/cisternaRouter";



class App {
    private app: any = express();
    private server: any = http.createServer(this.app);
    private io: any = null

    private CORS_OPTIONS: any = {
        //localhost
        origin: 'http://localhost:5173',
        //prod
        //origin: 'hogaryestilo.com.mx',
        optionsSuccessStatus: 200
    }

    constructor() {
        this.configure();
    }

    configure(): void {
        this.app.use(express.json());

        this.app.use("/api/user",userRouter);
        this.app.use("/api/rotoplas",rotoplasRouter);
        this.app.use("/api/cisterna",cisternaRouter);
        this.app.use(cors());
    }

    socketServer(): void {
        this.io = new SocketServer(this.server, {
            cors: {
              origin: "http://localhost:5173",
              optionsSuccessStatus: 200
            }
        })
        this.io.on('connection', (socket: any) =>{
            socket.emit("message", "hola soy el socket");
        });
    }

    start() {
        this.server.listen(3000);
    }
    

}

const app: App = new App();
app.start();
app.socketServer(); */