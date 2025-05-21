import Certificate from "../models/certificate.models.js";

export default async function getIssuedCertificates(req, res) {
    const { studentid, issuerid } = req.body;
    try{
        const issuedCertificates = await Certificate.find({})
        console.log("Issued Certificates from DB : ", issuedCertificates)
        res.status(200).json({
            status: 200,
            data: issuedCertificates
        })
    }
    catch(err) {
        console.log("Error Fetching Certificate Data : ", err)
        res.status(500).json({
            status: 500,
            msg: 'Some Error Occured !'
        })
    }
}