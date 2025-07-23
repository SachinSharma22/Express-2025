import express from 'express';  
const app = express();

function checkAgeRouteMiddleware(req,res,next) {
    if(!req.query.age || req.query.age < 18){
        res.send("You are not able to access this page.")
    }else{
        next();
    }
}
function checkUrlRouteMiddleware(req,res,next) {
    console.log(req.url);
    next();
}
app.get("/",(req,res) => {
    res.send("This is Home Page")
});
app.get("/login",(req,res) => {
    res.send("This is login Page")
});
app.get("/admin",checkUrlRouteMiddleware,(req,res) => {
    res.send("This is admin Page")
});
app.get("/users",checkAgeRouteMiddleware,(req,res) => {
    res.send("This is Users Page")
});
app.get("/products",checkAgeRouteMiddleware,(req,res) => {
    res.send("This is Products Page")
});
app.listen(3900,() => {
    console.log("server is running on 3900")
})