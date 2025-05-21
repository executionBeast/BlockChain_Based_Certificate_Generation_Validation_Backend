import User from "../models/user.models.js";
import CourseEnrolled from "../models/courseEnrolled.models.js";

export const getEnrolledStudentIDs = async () => {  //this will be used to show options for issuer to issue certificates
    try{
        const enrolledStudentData = await CourseEnrolled.aggregate([
            {
                $group: {
                    _id:"$studentid"
                }
            },
            {
                $project: {
                    studentid: "$_id",
                    _id: 0
                }
            }
        ])
        console.log("Enrolled Students Data ", enrolledStudentData)
        const enrolledStudentIDs = enrolledStudentData.map(doc => doc.studentid)
        console.log("ID ARRAY : ", enrolledStudentIDs)
        return enrolledStudentIDs
    }
    catch(err){
        console.log("Error Getting Enrolled Student Data", err)
        return {
            status: 'failed',
            msg: 'Error Getting Enrolled Student IDs'
        }
    }
}

const getEnrolledStudentsData = async (req,res)=>{
    const enrolledStudentIDs = await getEnrolledStudentIDs();
    const enrolledStudentsData = await User.find({
        _id: {$in: enrolledStudentIDs}
    })
    res.status(200).json({
        status: '200',
        data: enrolledStudentsData
    })


    // console.log("Id passed : ",req.body.id)
    // if(req.body.id){
    //     const userdata = await User.findOne({_id: req.body.id})
    //     console.log("User Data of Id: ",req.body.id,"is : ",userdata)
    //     res.status(200).json(userdata)
    // }
    // else{
    //     try{
    //         const userdata = await User.find({usertype:'student'})
    //         console.log("Users Data is --> ",userdata)
    //         res.status(200).json(userdata);

    //     }
    //     catch(err){
    //         console.log("Error While Getting User Data",err)
    //         res.status(500).send({
    //             err:err,
    //             msg:"Unable to Get Users"
    //         })
    //     }
    // }
}





// const getEnrolledStudentsData = async (req,res)=>{
//     console.log("Id passed : ",req.body.id)
//     if(req.body.id){
//         const userdata = await User.findOne({_id: req.body.id})
//         console.log("User Data of Id: ",req.body.id,"is : ",userdata)
//         res.status(200).json(userdata)
//     }
//     else{
//         try{
//             const userdata = await User.find({usertype:'student'})
//             console.log("Users Data is --> ",userdata)
//             res.status(200).json(userdata);

//         }
//         catch(err){
//             console.log("Error While Getting User Data",err)
//             res.status(500).send({
//                 err:err,
//                 msg:"Unable to Get Users"
//             })
//         }
//     }
// }

export default getEnrolledStudentsData;