import dotenv from "dotenv";
dotenv.config({
    path:'.env',
})

import nodemailer from "nodemailer";
const NODEMAILER_USER = process.env.NODEMAILER_USER;
const NODEMAILER_PASS = process.env.NODEMAILER_PASS;
console.log(NODEMAILER_PASS, NODEMAILER_USER)

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: NODEMAILER_USER,
        pass: NODEMAILER_PASS   
    }
});
const nodemailerSendEmailOTP = async (to, otp)=>{
    try{

        const mail = await transporter.sendMail(
            {
                from:'BCertify <raos92249@gmail.com>',
                to:`${to}`,
                subject:'BCertify OTP',
                html:`Your One Time Password is : ${otp}`,
            }
        );
        console.log(`Email Sent: `, mail);
        return {
            succes: true,
            msg : 'OTP Sent Successfully',
            data: {
                email: to,
                otp: otp
            },
        }
    }
    catch(error){
        console.log("EmailError: ",error);
        return {
            success: false,
            msg : 'Error Occured while sending OTP!',
            data: {
                email: to,
            },
        }
    }
}
// let to = 'ashokag67570@gmail.com'
// let otp = 544356
// console.log(nodemailerSendEmailOTP(to,otp));

export default nodemailerSendEmailOTP;
