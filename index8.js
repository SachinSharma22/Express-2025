import express from 'express'
const app  = express();
app.get("/", (req, res) => {
    const users = ['aman','sahcin', 'saurabh', 'pawan'];
    let data = `<ul>`
    for(let i=0; i<users.length; i++) {
        data += `<li><a href='user/${users[i]}'>${users[i]}</a></li>`;
    }
    data+=`</ul>`
    res.send(data);
});
app.get("/user/:name",(req,res) => {
    const userName = req.params.name;
    const capitalizeName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
    res.send(`This is ${capitalizeName}'s Profile`)
})
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});