export const auth = (req,res,next) => {
    console.log("you are authorized");
    next();
}