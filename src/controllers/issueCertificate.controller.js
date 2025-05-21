import Certificate from "../models/certificate.models.js";

const issueCertificate = async (req,res) => {
    const {issuerid, issuername, courseid, coursetitle, studentid, studentname, certificateurl} = req.body
    if(!issuerid || !issuername || !courseid || !coursetitle || !studentid || !studentname || !certificateurl){
        res.status(400).json({status: 400, msg: 'All Fields Required!'})
        console.log("Certificate Body Data : ",  {issuerid, issuername, courseid, coursetitle, studentid, studentname, certificateurl})
    }
    try{
        const certificate = await Certificate.create({
            issuerid, issuername, courseid, coursetitle, studentid, studentname, certificateurl
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
// certificateurl