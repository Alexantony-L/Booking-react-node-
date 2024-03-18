import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import cookieParser from "cookie-parser"
import mongoose from 'mongoose';
import usersRoutes from './routes/users'
import authRoutes from './routes/auth'
import path from 'path';

mongoose.connect(process.env.DB_CONNECTION_STRING as string)
//     .then(() => { 
//     console.log("connected database :",process.env.DB_CONNECTION_STRING)
// })

const app = express();
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials:true
}))

app.use(express.static(path.join(__dirname,"../../frontend/dist")))

app.use("/api/auth",authRoutes)
app.use("/api/users",usersRoutes)
 
app.listen(5000, () => { 
    console.log("server running:5000")
})

//l0jovHiONsbdniG2
//IfYuezZNafHS1NE8 - test db 
//mongodb+srv://admin:<password>@e2e-test-db.txls9r8.mongodb.net/?retryWrites=true&w=majority&appName=e2e-test-db