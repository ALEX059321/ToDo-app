import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/user.js";

const router = express.Router();

// REGISTER / SIGN UP
router.post("/register", async (req, res) => {
    try {
        console.log('REGISTER BODY:', req.body);
        const { email, username, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ error: "Email already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ email, username, password: hashedPassword });
        await user.save();
        res.status(201).json({ user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



//LOGIN

router.post("/login", async (req, res) => {
    try {
        console.log('LOGIN BODY:', req.body);
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ error: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        res.status(200).json({ user: existingUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});




export default router;