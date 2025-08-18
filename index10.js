import express from "express";
import { MongoClient, ObjectId } from "mongodb";
const app = express();
const dbName = "schoool";
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

client.connect().then((connection) => {
  const db = connection.db(dbName);
  console.log("database connected");
  app.get("/api", async (req, res) => {
    const collection = db.collection("students");
    const student = await collection.find().toArray();
    res.send(student);
  });
  app.get("/ui", async (req, res) => {
    const collection = db.collection("students");
    const students = await collection.find().toArray();
    res.render("students", { students: students });
  });
  app.get("/add", (req, res) => {
    res.render("add-student");
  });
  app.post("/add-users", async (req, res) => {
    // console.log(req.body);
    const collection = db.collection("students");
    const result = await collection.insertOne(req.body);
    console.log(result);
    res.send("User added successfully");
  });

  app.post("/add-user-api", async (req, res) => {
    // console.log(req.body)
    const { name, age, email } = req.body;
    if (!name || !age || !email) {
      res.send({ message: "Operation Failed", success: false });
      return false;
    }
    const collection = db.collection("students");
    const result = await collection.insertOne(req.body);
    res.send({ message: "Operation Success", success: true, result: result });
  });
  app.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    const collection = db.collection("students");
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    if (result) {
      res.send("Response Deleted");
    } else {
      res.send("Not Deleted");
    }
  });

  app.get("/ui/delete/:id", async (req, res) => {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).send("Invalid ID format");
    }

    const collection = db.collection("students");
    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 1) {
      res.send("Response Deleted");
    } else {
      res.send("Not Deleted");
    }
  });
app.get("/update/:id",async(req,res) => {
    const { id } = req.params;
    const collection = db.collection("students");
    const result = await collection.findOne({_id: new ObjectId(id)})
   res.render('update-student',{result:result})
})
  app.get("/students/:id", async (req, res) => {
    const { id } = req.params;
    const collection = db.collection("students");
    const result = await collection.findOne({ _id: new ObjectId(id)});
     
    res.send({
      message: "success",
      success: true,
      result: result,
    });
  });
  app.post("/ui/update/:id", async (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;

  if (!ObjectId.isValid(id)) {
    return res.status(400).send("Invalid ID");
  }

  const collection = db.collection("students");

  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: { name, age, email } }
  );

  if (result.modifiedCount === 1) {
    res.send("User updated successfully");
  } else {
    res.send("User update failed");
  }
});

});
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
