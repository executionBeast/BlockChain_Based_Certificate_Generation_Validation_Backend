import Certificate from "../models/certificate.models.js";

const issueCertificate = async (req,res) => {
    const {certID, issuerid, issuername, courseid, coursetitle, studentid, studentname, certificatecid} = req.body
    if(!certID || !issuerid || !issuername || !courseid || !coursetitle || !studentid || !studentname || !certificatecid){
        console.log("Certificate Body Data : ",  req.body)
        // console.log("Certificate Body Data : ",  {certID, issuerid, issuername, courseid, coursetitle, studentid, studentname, certificatecid})
        return res.status(400).json({status: 400, msg: 'All Fields Required!'})
    }
    try{
        const certificate = await Certificate.create({
            _id: certID ,issuerid, issuername, courseid, coursetitle, studentid, studentname, certificatecid
        })
        if(certificate) {
            res.status(201).json({
                status: 201,
                msg: 'Certificate Issued Successfully',
                data: certificate
            })
        }
        


    }
    catch(err){
        res.status(500).json({
            status: 500,
            msg: 'Internal Server Error Occured!'
        })

    }
}


export default issueCertificate;



// issuerid
// issuername
// courseid
// coursetitle
// studentid
// studentname
// certificatecid