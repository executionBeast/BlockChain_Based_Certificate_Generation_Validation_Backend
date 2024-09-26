import mongoose from "mongoose";
import dotenv from "dotenv"
import { DB_NAME } from "../contants.js";

dotenv.config({
    path:".env"
})

const MONGO_URI = process.env.MONGO_URI
const connectDB = async ()=>{
    try{
        const mongoConnection = await mongoose.connect(`${MONGO_URI}/${DB_NAME}`)
        // console.log(mongoConnection.connections)
    }
    catch(err){
        console.log("MONGODB CONNECTION ERROR : ",err)
    }

}

export default connectDB;