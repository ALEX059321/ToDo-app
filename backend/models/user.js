import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String,
       
    },
    email: {
        type : String,
        required : true,
        unique : true
    },
    password: {
        type : String,
        required : true,
    },
    list:[{
        type : mongoose.Schema.Types.ObjectId,
        ref : "list"
    }]
})

export default mongoose.model("User", userSchema);