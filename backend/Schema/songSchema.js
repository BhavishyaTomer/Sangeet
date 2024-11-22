import mongoose from "mongoose"
const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    songCoverPic: {
        type: String,
        required: true
    },
    songAudioUrl: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    albumId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"album",
        required: false
    }
}, { timestamps: true })

export const song=mongoose.model("song",songSchema)