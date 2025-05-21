import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema({

    issuerid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },

    issuername:{
        type:String,
        required:true,
    },
    courseid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    coursetitle: {
        type: String,
        required:true,
    },
    studentid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    studentname:{
        type:String,
        required:true
    },
    certificateurl:{
        type:String,
        required:true
    }

},{timestamps:true});

const Certificate = mongoose.model("Certificate",certificateSchema);
export default Certificate;


// studentid:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:'User'
// },
// courseid:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:''
// }    