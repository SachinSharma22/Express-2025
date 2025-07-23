import express from 'express'
import { userControl } from './controller/userController.js';
import { adminControl } from './controller/adminController.js';
const app = express();
app.set('view engine', 'ejs');
app.get("/users",userControl);
app.get("/admin",adminControl)
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});