import express from "express";
import { generateAvatar } from "../controllers/apiController.js";
const router = express.Router();

router.route("/").get((req,res)=>{
    res.send('root')
});

export default router;
