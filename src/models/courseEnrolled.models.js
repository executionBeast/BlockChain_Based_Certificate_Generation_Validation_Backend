import mongoose from "mongoose";

const courseEnrolledSchema = new mongoose.Schema({
    studentid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    courseid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }
},{timestamps:true})

const CourseEnrolled = mongoose.model("EnrolledCourse",courseEnrolledSchema);
export default CourseEnrolled;