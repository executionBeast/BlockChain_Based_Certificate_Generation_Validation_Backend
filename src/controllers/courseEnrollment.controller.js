import CourseEnrolled from "../models/courseEnrolled.models.js";

const courseEnrollment = async (req, res)=>{
    try{
        const {studentid, courseid}=req.body;
        console.log("COURSE ENROLL FORM --->",req.body)
        const courseEnrollment = CourseEnrolled({
            studentid,
            courseid
        })
        const result = await courseEnrollment.save();
        console.log("Course Enrolled Succesfully", result);
        res.status(200).json(result)
        
        
    }
    
    catch(err){
        console.log("Fatal Error Course Enrollment", res);
        res.status(400).json({
            error:err,
            msg:"Error Course Enrollment"
        })
    
    }
} 

export default courseEnrollment;
// this code successfully creates course enrollment but the response sent to client is of catch block