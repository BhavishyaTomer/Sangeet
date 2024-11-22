import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import authRouter from './Routes/authRoute.js'; 
import adminRouter from './Routes/adminRoute.js'
import albumRouter from './Routes/albumRoute.js'
import {songRouter} from './Routes/songRoute.js'
import {userRouter} from './Routes/userRoutes.js'
import {statRouter} from './Routes/stateRoute.js'
import { clerkMiddleware } from '@clerk/express';
import path from 'path'
import fileUpload from 'express-fileupload';
dotenv.config();
const app=express()
const __dirname=path.resolve()

app.use(cors())
app.use(express.json());
app.use(fileUpload(
    {
        useTempFiles:true,
        tempFileDir:path.join(__dirname,"temp"),createParentPath:true
    }
))
app.use(clerkMiddleware())

app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
// app.use("/api/sangeet", SongRoutes);
app.use("/api/album", albumRouter);
app.use("/api/stat", statRouter);
app.use("/api/auth", authRouter);

app.use((err,req,res,next)=>{
    res.status(500).json({message:process.env.NODE_ENV==="PRODUCTION"?"Internal Server Error":err.message})
})

mongoose.connect(process.env.MONGO_DB_URI).then(()=>{
    console.log("DB is Online")
    app.listen(process.env.PORT,()=>{
        console.log("port is running at ",process.env.PORT)
    })
})


