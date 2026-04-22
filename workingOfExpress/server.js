import express from "express";
import { logger } from "./middleware/logger.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

//middleware
// app.use((req,res,next) => {
//     console.log("Request received");
//     next(); //if not called server got hand
// });

app.use(express.json());
app.use(logger);

app.use("/users", userRoutes);

app.listen(3000 || 6000, () => {
    console.log("server is running on 3000");
});