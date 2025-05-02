import Course from "../models/course.models.js";

const createCourse = async (req,res) => {
    try{
        const {issuerid, issuername, title, certitype} = req.body;
        console.log(req.body)
        const course = Course({
            issuerid,
            issuername,
            title,
            certitype
        })
        const courseResponse = await course.save()

        console.log(req.body,"COurse Response==>", courseResponse)
        res.send(courseResponse)
    }
    catch(err){ 
        console.log("ERROR CREATING COURSE",err)
        res.status(400).json({
            message:"Error Occured",
            error:JSON.stringify(err),
        })
    }
    
}

export default createCourse;