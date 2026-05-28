import express from 'express';
import connectDB from './conn/conn.js';
import dotenv from "dotenv";
import auth from "./routes/auth.js"
dotenv.config();
connectDB()
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/v1", auth);




app.get("/",(req,res) => {
    res.send("hello world");
});




app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})