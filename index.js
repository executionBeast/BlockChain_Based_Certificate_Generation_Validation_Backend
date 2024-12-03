//Library Imports
import express from "express";
import cors from "cors";

import dotenv from "dotenv";
// Imoprt and Execute ENV as early as possible after import

// dotenv.config({
//     path:'.env'
// })
dotenv.config({
    path:'.local.env'
})

import router from "./src/routes/routes.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";




//Local Imports
import connectDB from "./src/database/connection.js";

//Initialization
const app = express();
const PORT=process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;
console.log("MONGO_URI __>",MONGO_URI);

//Import Executions
connectDB(MONGO_URI)
app.use(morgan('dev'));
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"It is backend of BlockChain Based Certificate Generation Validation"
    })
})

app.use("/api",router)  //router

app.listen(PORT,()=>{
    console.log(`Server Listening...! http://localhost:${PORT}`)
})