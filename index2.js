import express from "express";
import path from "path";
const app = express();
app.get("/", (req, res) => {
  const absPath = path.resolve("view/home.html");
  res.sendFile(absPath);
});
app.get("/login", (req, res) => {
  const absPath = path.resolve("view/login.html");
  res.sendFile(absPath);
});
app.get("/about", (req, res) => {
  const absPath = path.resolve("view/about.html");
  res.sendFile(absPath);
});
app.use((req, res) => {
  const absPath = path.resolve("view/404NotFound.html");
  // If the requested file is not found, send the 404 page  
  res.status(404).sendFile(absPath);
});
app.listen(3300, () => {
  console.log("Server is running on port 3300");
});
