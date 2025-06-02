import express from "express";
const router = express.Router();
import createUser from "../controllers/createUser.controller.js";
import sendUserId from "../controllers/login.controller.js";
import getAllUsers from "../controllers/getAllUsers.controller.js";
import createCourse from "../controllers/createCourse.controller.js";
import getCourse from "../controllers/getCourse.controller.js";
import courseEnrollment from "../controllers/courseEnrollment.controller.js";
import getEnrolledStudentsData from "../controllers/getEnrolledStudents.controller.js";
import { getEnrolledStudentIDs } from "../controllers/getEnrolledStudents.controller.js";
import issueCertificate from "../controllers/issueCertificate.controller.js";
import getIssuedCertificates from "../controllers/getIssuedCertificates.js";
import getEnrolledStudentsWithCertificate from "../controllers/getEnrolledStudentsWithCertificates.controller.js";
import getCertificates from "../controllers/getCertificates.controller.js";
import sendEmailOTP from "../controllers/sendEmailOTP.js";
//USER (student)
router.post("/user",createUser)
router.post("/login",sendUserId)
router.get("/users",getAllUsers)
router.post("/course-enrollment", courseEnrollment)
router.get("/get-enrolled-students", getEnrolledStudentsData)
router.get("/get-certificates/:studentid", getCertificates)
// router.get("/get-enrolled-students", getEnrolledStudentIDs)  //check IDs


//ISSUER
router.post("/issuer",createUser)
router.post("/course",createCourse)
router.get("/course",getCourse)
// router.post("/login",sendUserId)
router.post("/issue-certificate", issueCertificate)
// router.put("update-certificate", updateCertificate)

router.get("/issued-certificates", getIssuedCertificates)
router.get("/get-enrolled-students-certificates", getEnrolledStudentsWithCertificate)
router.post("/send-otp", sendEmailOTP)
// console.log(router)

export default router;