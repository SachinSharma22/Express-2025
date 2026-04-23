import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// recreate __dirname (ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// view engine setup (EJS)
app.set("view engine", "ejs");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// static files
app.use(express.static(path.join(__dirname, "public")));

// route
app.get("/", (req, res) => {
    res.render("index"); // ✅ correct way
});

// server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});