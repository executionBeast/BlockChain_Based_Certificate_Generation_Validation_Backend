import Course from "../models/course.models.js";

const getCourse = async(req,res)=>{
    try{
        const {issuerid} = req.query;
        console.log(" QUERY ID ",req.query.issuerid)
        if(issuerid){
            const courseData = await Course.find({issuerid:issuerid});
            console.log(courseData)
            res.status(200).json(courseData)
            return courseData;
        }
        else{
            const courseData = await Course.find({});
            console.log(courseData)
            res.status(200).json(courseData)
            return courseData;

        }




    }
    catch(err){
        console.log("ERROR WHILE GETTING COURSE",err)
        res.status(400).json({
            message:"Error Occured!",
            error:err
        })
    }

}

export default getCourse;