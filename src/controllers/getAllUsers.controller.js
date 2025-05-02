import User from "../models/user.models.js";

const getAllUsers = async (req,res)=>{
    console.log("Id passed : ",req.body.id)
    if(req.body.id){
        const userdata = await User.findOne({_id: req.body.id})
        console.log("User Data of Id: ",req.body.id,"is : ",userdata)
        res.status(200).json(userdata)
    }
    else{
        try{
            const userdata = await User.find({usertype:'student'})
            console.log("Users Data is --> ",userdata)
            res.status(200).json(userdata);

        }
        catch(err){
            console.log("Error While Getting User Data",err)
            res.status(500).send({
                err:err,
                msg:"Unable to Get Users"
            })
        }
    }
}

export default getAllUsers;