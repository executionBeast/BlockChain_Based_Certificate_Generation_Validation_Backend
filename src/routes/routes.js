import express from "express";
const router = express.Router();
import createUser from "../controllers/createUser.controller.js";
import sendUserId from "../controllers/login.controller.js";

//USER (student)
router.post("/user",createUser)
router.post("/login",sendUserId)

//ISSUER
router.post("/issuer",createUser)
// router.post("/login",sendUserId)




// console.log(router)

export default router;