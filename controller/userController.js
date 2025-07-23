import { adminList } from "../module/adminList.js";
import { userList } from "../module/userList.js";

export function userControl (req,res) {
    res.render('users', { userList: userList() }); // Call the function here
} 
