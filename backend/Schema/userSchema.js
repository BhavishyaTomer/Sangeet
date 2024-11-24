import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    clerkId: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true })

export const user=mongoose.model("user",userSchema)