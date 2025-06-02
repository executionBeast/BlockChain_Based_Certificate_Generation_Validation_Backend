import nodemailerSendEmailOTP from "../utils/emailNotification.js"

const OTPGenerator = () => {
    return `${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`
}


const sendEmailOTP = async (req, res) =>{
    const {email} = req.body
    if(!email){
        return res.status(400).json({
            status:400,
            msg: 'Empty Request, No Email Provided!'
        })
    }
    try{

        let otp = OTPGenerator()
        let resp = await nodemailerSendEmailOTP(email, otp)
        console.log("RESPONSE OF SEND OTP FUNCTION : ",resp)
        return res.status(200).json(resp)

    }
    catch(err){
        console.log("OTP ERROR : ", err)
        return res.status(500).json({
            status: 500,
            msg: 'Something went wrong!'
        })
    }

}

export default sendEmailOTP;