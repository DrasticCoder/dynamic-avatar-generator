import express from "express";
import { generateAvatar } from "../controllers/apiController.js";
const router = express.Router();

router.route("/").get((req,res)=>{
    res.render('index')
});

export default router;
