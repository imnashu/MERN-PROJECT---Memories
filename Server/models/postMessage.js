import mongoose from "mongoose";

const mongooseSchema = mongoose.Schema(
    {
        title : String,
        message : String,
        creator : String,
        tags : [String],
        selectedFile : String,
        likecount : {
            type : Number,
            default : 0
        },
        createdAt : {
            type : Date,
            default : new Date()
        }
    }
);

const postMessages = mongoose.model('postMessage' , mongooseSchema)

export default postMessages