import express from 'express';
import connectDB from './conn/conn.js';
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/",(req,res) => {
    res.send("hello world");
});


connectDB().catch(err => {
  console.error('DB connect failed:', err);
});

app.listen(5000, () => {
    console.log("server started on port 5000")
})