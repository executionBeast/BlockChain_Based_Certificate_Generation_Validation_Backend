import Certificate from "../models/certificate.models.js";

export default async function verifyCertificate(req, res) {
    const {certificateid} = req.params 
    if(!certificateid) {
        return res.status(404).json({
            status: 404,
            msg: 'Bad Request missing para certificateid!'
        })
    }
    // const {certificateid} = req.query;
    try{
        const certificate = await Certificate.findOne({_id: certificateid})
        console.log("Certificate ID : ", certificateid)
        console.log("Certificate Data : ", certificate)
        res.send(certificate)
    }
    catch(err){
        console.log("Error")
    }
}