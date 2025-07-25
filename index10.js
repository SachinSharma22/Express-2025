import express from 'express';
import { MongoClient } from 'mongodb';
const app = express();
const dbName = "schoool";
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

app.set('view engine', 'ejs')

client.connect().then((connection) => {
    const db = connection.db(dbName);

    app.get("/api",async (req,res) => {
        const collection = db.collection('students')
        const student = await collection.find().toArray();
        res.send(student)
    })
    app.get("/ui", async (req,res) => {
        const collection = db.collection('students')
        const students = await collection.find().toArray()
        res.render('students',{students : students})
    })
})
// app.set("view engine", "ejs");
// app.get("/", async(req, res) => {
//      await client.connect();
//     const db = client.db(dbName);
//     const collection = db.collection('students');
//     // You can perform operations on the collection here, e.g., find, insert, update
//     const students = await collection.find().toArray();
//     console.log(students)
//     // console.log(`Connected to database: ${dbName}`);
//     res.render('students',{ students: students });
// });
app.listen(3000, async () => {
    console.log("Server is running on port 3000");
    // try {
    //     await connectToDatabase();
    //     console.log("Connected to MongoDB");
    // } catch (error) {
    //     console.error("Error connecting to MongoDB:", error);
    // }
});
