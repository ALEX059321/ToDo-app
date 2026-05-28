import express from "express";
import User from "../models/user.js";

const router = express.Router();

//SIGN IN 
router.post("/register", async (req, res) => {
    try {
        const {email, username, password} = req.body;
        const user = new User({ email, username, password});
        await user.save().then(() => 
            res.status(200).json({ user: user})        ) 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;