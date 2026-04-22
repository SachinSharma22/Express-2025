import express from "express";
import { getUser, createUser, profile } from "../controllers/userController.js";
import { auth } from "../middleware/auth.js";
const router = express.Router();


router.get("/getUser", getUser);
router.post("/createUser", createUser);
//route level middleware Integration
router.get("/profile",auth,profile)

// router.get("/getUser", (req,res) => {
//     res.send("All users");
// });

// router.post('/createUser',(req,res) => {
//     res.send("Create user");
// });

export default router;