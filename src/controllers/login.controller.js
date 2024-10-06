//On Get Request to /login endpoint send userID as json response
import User from "../models/user.models.js"
import { argonVerifyPassword } from "../utils/hashPassword.js"

const sendUserId = async (req, res) =>{
    try{
        const {email, password} = req.body;

        // Validate if email and password are provided
        if (!email || !password) {
            return res.status(400).json({
                    status: 400,
                    message: "Email and password are required!"
            });
        }

        const user = await User.findOne({email:email}).exec();

        if(user){
            let fetchedPassword = user.password;
            const isValidated = await argonVerifyPassword(fetchedPassword,password)
            if(isValidated){
                res.cookie("uid",user._id)  //set user id cookie
                return res.status(200).json({
                    uid:user._id,     //mongodb id field
                    userdata:user
                })

            }
            else{
                return res.status(401).json({
                    status:401,
                    message:"Incorrect password!"
                })
            }
        }
        else{
            res.status(404).json({
                status:404,
                message:"No user found with that email!"
            })
        }
    }
    catch(err){
        console.log("Error in /login endpoint ",err)
        res.status(500).json({
            status:500,
            message:"Internal Server Error"
        })
    }
    

}

export default sendUserId;