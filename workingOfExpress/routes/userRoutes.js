import express from "express";
const router = express.Router();

router.get("/getUser", (req,res) => {
    res.send("All users");
});

router.post('/createUser',(req,res) => {
    res.send("Create user");
});

export default router;