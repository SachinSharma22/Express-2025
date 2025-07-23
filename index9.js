import express from "express";  
import userData from './user.json' with { type: "json" };
const app = express();

app.get("/",(req,res) => {
    res.send(userData)
});
app.get("/user/:id",(req,res) => {
    const id = req.params.id;
    // console.log(id)
     const userDetail = userData.filter((user) => user.id == id);
    res.send(userDetail)
})

app.listen(3000,() => {
    console.log("Server is running on http://localhost:3000");
})