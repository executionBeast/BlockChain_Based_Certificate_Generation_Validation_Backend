import express from "express";
const router = express.Router();
import createUser from "../controllers/createUser.controller.js";
import sendUserId from "../controllers/login.controller.js";
import getAllUsers from "../controllers/getAllUsers.controller.js";
import createCourse from "../controllers/createCourse.controller.js";
import getCourse from "../controllers/getCourse.controller.js";
import courseEnrollment from "../controllers/courseEnrollment.controller.js";
//USER (student)
router.post("/user",createUser)
router.post("/login",sendUserId)
router.get("/users",getAllUsers)
router.post("/course-enrollment", courseEnrollment)

//ISSUER
router.post("/issuer",createUser)
router.post("/course",createCourse)
router.get("/course",getCourse)
// router.post("/login",sendUserId)




// console.log(router)

export default router;