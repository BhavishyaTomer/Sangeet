import { song } from "../Schema/songSchema.js";
import { album } from "../Schema/albumSchema.js";
import { user } from "../Schema/userSchema.js";
export const getAllStats = async (req, res) => {
    try {
        // const totalUSer= await user.countDocuments()
        // const totalSong=await song.countDocuments()
        // const totalAlbum=await album.countDocuments()

        const [totalUser, totalSong, totalAlbum, uniqueArtist] = await Promise.all([
            user.countDocuments(),
            song.countDocuments(),
            album.countDocuments(),
            song.aggregate([
                {
                    $unionWith: {
                        coll: "album", // The name of the collection to merge with
                        pipeline: [] // Optional: you can add transformations here if needed
                    }
                },
                {
                    $group: {
                        _id: "$artist" // Group by artist to ensure uniqueness
                    }
                },
                {
                    $count: "count" // Count the number of unique artists
                }
            ])
       ])

res.status(200).json({
    users: totalUser,
    songs: totalSong,
    album: totalAlbum,
    totalArtist:uniqueArtist[0]?.count || 0
})
    } catch (error) {
next(error)
}
}