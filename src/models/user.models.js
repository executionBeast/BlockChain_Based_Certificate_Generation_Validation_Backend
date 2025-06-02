import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    firstname:{
        type:String,
        required:true,
    },
    middlename:{
        type:String,
        required:false,
    },
    lastname:{
        type:String,
        required:false,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    usertype:{
        type:String,
        enum:['student','issuer'],
        required:true
    },
    isEmailVerified:{
        type:Boolean,
        default:false,
        required:true
    },
    isPhoneVerified:{
        type:Boolean,
        default:false,
        required:true

    }

},
{timestamps:true})

const User = mongoose.model("User", userSchema);
export default User;