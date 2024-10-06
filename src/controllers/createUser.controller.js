import User from "../models/user.models.js"
import { argonHashPassword } from "../utils/hashPassword.js";


const createUser = async (req, res)=>{
    try{
        const {username, firstname, middlename, lastname, email, password, phone, usertype} = req.body;
        const hashedPassword = await argonHashPassword(password);
        // console.log("hashedPassword -->",hashedPassword)
        const userdata = await User({
            username,
            firstname,
            middlename,
            lastname,
            email,
            phone,
            password:hashedPassword,
            usertype
        })
        await userdata.save()    //async task of save() or create()
        // console.log(userdata)
        res.status(200).json({userdata})

    }catch(err){
        //USE ERROR HANDLER FROM UTILS LATER TO LOG AND SEND ERROR MSG AS JSON
        res.status(400).json({
            message:"Error Ocurred",
            error:JSON.stringify(err)
        })
        console.log("ERROR CREATING USER : ",err)
    }
};

export default createUser;