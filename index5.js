import express from 'express';
import fs from 'fs';
import path from 'path';
const app = express();
const cssPath = path.resolve('public');
app.use(express.static(cssPath));

app.get("/error",(req,res,next) => {
    const err = new Error("Something went wrong!");
    next(err)
})
const absPath = path.resolve("view")
app.get("/", (req, res) => {
  res.sendFile(absPath+"/home.html");
});

app.use(express.urlencoded({ extended: true }));
app.get("/login", (req, res) => {
  fs.readFile("view/login.html", (err, data) => {
    if (err) {
      res.status(500).send("Error reading file");
    } else {
      res.send(data.toString());
    }
  });
});

app.post("/submit", (req, res) => {
    console.log("user login successful")
  res.send(req.body);
});

app.use((err,req,res,next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
})
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});