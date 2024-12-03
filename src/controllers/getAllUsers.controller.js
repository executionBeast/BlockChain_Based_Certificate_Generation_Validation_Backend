import User from "../models/user.models.js";

const getAllUsers = async (req,res)=>{
    try{
        const userdata = await User.find({usertype:'student'})
        console.log("Users Data is --> ",userdata)
        res.status(200).json(userdata);

    }
    catch(err){
        console.log("Error While Getting User (student)",err)
        res.status(500).send({
            err:err,
            msg:"Unable to Get Users"
        })
    }
    
}

export default getAllUsers;