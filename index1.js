import express from "express";
import home from "./pages/home.js";
import login from "./pages/login.js";
import submit from "./pages/submit.js";
const app = express();
app.get("/", (req, res) => {
  res.send(home());
});
app.get("/login", (req, res) => {
  res.send(login());
});
app.post("/login", (req, res) => {
  // Here you would handle the login logic, e.g., checking credentials
    res.send(submit());
});
app.listen(3200, () => {
  console.log("Server is running on port 3200");
});
