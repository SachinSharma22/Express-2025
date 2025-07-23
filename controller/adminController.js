import { adminList } from "../module/adminList.js";

export function adminControl (req, res) {
    res.render('admin',{adminList: adminList}); // Call the function here
}