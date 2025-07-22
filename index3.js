import express from "express";
const app = express();

// function ageCheck(req, res, next) {
//   if (!req.query.age || req.query.age < 18) {
//     res.send("You are not allowed to access this page");
//   } else {
//     next();
//   }
// }

// app.use(ageCheck);

app.use((req,res,next) => {
    console.log("Your are accessing " + req.url + " page");
    // Uncomment the line below to send a response instead of calling next()
    // res.send("Your are accessing " + req.url + " page");
    next();
})
app.get("/", (req, res) => {
  res.send("This is home page");
});
app.get("/login", (req, res) => {
  res.send("This is Login page");
});
app.get("/admin", (req, res) => {
  res.send("This is admin page");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
