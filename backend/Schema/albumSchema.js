import mongoose from "mongoose"
const albumSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    albumCoverPic: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        required: true
    },
    song: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"song",
        required: false
    }]
}, { timestamps: true })

export const album=mongoose.model("album",albumSchema)