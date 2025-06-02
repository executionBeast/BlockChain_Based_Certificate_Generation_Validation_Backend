import Certificate from "../models/certificate.models.js";
export default async function getCertificates(req,res) {
    const {studentid} = req.params;
    console.log("GET CERT URL PARAMS ", req.params, "StudentID : ", studentid)
    if(studentid){
        try{
            const certData = await Certificate.find({
                studentid: studentid
            })
            console.log("DB CERT DATA : ---> ", certData)
            if(certData.length > 0 ){
                return res.status(200).json({
                    status: 200,
                    data: certData
                })
            }
            else{
                return res.status(404).json({
                    status: 404,
                    msg: "No Certificate Found For This ID"
                })
            }
          
        }
        catch(err){
            console.log("ERROR GETTING CERTIFICATE : ", err)
            return res.status(500).json({
                status:500,
                msg: "Something went wrong!"
            })
        }
    }
    else {
        try {
            let certData = await Certificate.find({})
            if(certData.length > 0 ){
                return res.status(200).json({
                    status: 200,
                    data: certData
                })
            }
            else {
                return res.status(404).json({
                    status: 404,
                    msg: "No Certificate Data Found!"
                })
            }

        }
        catch(err){
            console.log("ERROR GETTING CERTIFICATE : ", err)
            return res.status(500).json({
                status: 500,
                msg: "Something went wrong!"
            })
        }
    }
}