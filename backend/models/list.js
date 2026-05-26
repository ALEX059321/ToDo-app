import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    body: {
        type : String,
        required : true,
    }
})

module.exports = mongoose.model("list", listSchema)
  user:[{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }]
