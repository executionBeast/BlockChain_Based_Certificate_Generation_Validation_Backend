import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    issuerid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    issuername:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true
    },
    certitype:{
        type:String,
        required:true,
        enum:["C1","C2","C3","C4"]
    }

},{timestamps:true});

const Course = mongoose.model("Course",courseSchema);
export default Course;


// studentid:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:'User'
// },
// courseid:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:''
// }    