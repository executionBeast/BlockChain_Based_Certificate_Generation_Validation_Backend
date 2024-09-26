//Library Imports
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import router from "./src/routes/routes.js"
import morgan from "morgan"
import cookieParser from "cookie-parser"

//Local Imports
import connectDB from "./src/database/connection.js"

//Initialization
const app = express()
const PORT=process.env.PORT || 8000



//Import Executions
connectDB()
app.use(morgan('dev'));
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

dotenv.config({
    path:'.env'
})
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
    console.log(`Server Listening...! http://localhost:${8000}`)
})