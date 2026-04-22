import express from "express";
import { logger } from "./middleware/logger.js";

const app = express();

//middleware
// app.use((req,res,next) => {
//     console.log("Request received");
//     next(); //if not called server got hand
// });

app.use(logger);

app.get("/", (req,res) => {
    res.send("Hello world, kya haal chal");
});

app.listen(3000 || 6000, () => {
    console.log("server is running on 3000");
});