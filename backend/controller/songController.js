import { song as songSchema } from "../Schema/songSchema.js";
export const getAllSongs = async (req, res) => {
    try {
        const allSongs = songSchema.find().sort({ createdAt: -1 })
        res.status(200).json(allSongs)
    } catch (error) {
        next(error)
    }
}
export const getOneSong = async (req, res) => {
    try {
        const { id } = req.body
        const selectedSong = songSchema.findById({ id })
        if (selectedSong) {
            res.status(200).json(selectedSong)
        }
        else {
            res.status(400).json({ message: "Song dosent exist" })
        }
    } catch (error) {
        next(error)
    }
}
export const featuredSong = async (req, res) => {
    try {
        const songs = await songSchema.aggregate([{
            $sample: { size: 6 }
        },
        {
            $project: {
                title: 1,
                artist: 1,
                songCoverPic: 1,
                _id: 1,
                songAudioUrl: 1
            }
        }
        ]);
        res.json(songs)
    } catch (error) {
        next(error)
    }
}

export const trendingSong = async (req, res) => {
    try {
        const songs = await songSchema.aggregate([{
            $sample: { size: 4 }
        },
        {
            $project: {
                title: 1,
                artist: 1,
                songCoverPic: 1,
                _id: 1,
                songAudioUrl: 1
            }
        }
        ]);
        res.json(songs)
    } catch (error) {
        next(error)
    }
}

export const madeForYouSong = async (req, res) => {
    try {
        const songs = await songSchema.aggregate([{
            $sample: { size: 4 }
        },
        {
            $project: {
                title: 1,
                artist: 1,
                songCoverPic: 1,
                _id: 1,
                songAudioUrl: 1
            }
        }
        ]);
        res.json(songs)
    } catch (error) {
        next(error)
    }
}
