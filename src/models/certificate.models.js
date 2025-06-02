import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
        },
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
        required:true
    },
    studentname:{
        type:String,
        required:true
    },
    certificatecid:{
        type:String,
        required:true
    }

},{timestamps:true});

const Certificate = mongoose.model("Certificate",certificateSchema);
export default Certificate;
//  certificateurl:{
//         type:String,
//         required:true
//     }

// studentid:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:'User'
// },
// courseid:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:''
// }    