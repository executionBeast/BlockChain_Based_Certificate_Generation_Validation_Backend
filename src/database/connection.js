import mongoose from "mongoose";
// import dotenv from "dotenv"
import { DB_NAME } from "../contants.js";

console.log("DB NAME ----->>>>>>",DB_NAME)

// dotenv.config({
//     path:".env"
// })

// const MONGO_URI = process.env.MONGO_URI
const connectDB = async (MONGO_URI)=>{
    try{
        const mongoConnection = await mongoose.connect(`${MONGO_URI}/${DB_NAME}`)
        console.log("Database Connection Succes :",mongoConnection.connections[0].host,mongoConnection.connections[0].port)
    }
    catch(err){
        console.log("MONGODB CONNECTION ERROR : ",err)
    }

}

export default connectDB;