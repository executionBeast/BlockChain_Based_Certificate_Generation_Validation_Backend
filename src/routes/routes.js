import express from "express";
const router = express.Router();
import createUser from "../controllers/create.controller.js";
import sendUserId from "../controllers/login.controller.js";

router.post("/user",createUser)
router.post("/login",sendUserId)




// console.log(router)

export default router;