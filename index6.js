import express from 'express';
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs')
// app.get('/', (req, res) => {
//   res.render('home',{name:"Sachin Sharma", learn:"EJS in express"});
// });
app.get("/",(req,res)=> {
  res.send("This is home page")
})
app.get('/add-user', (req, res) => {
  res.render('addUser');
});
app.post("/submit-user",(req,res)=> {
  const user = req.body;
  console.log(user);
  res.render('submitUser', user);
})
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});