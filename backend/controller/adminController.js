import { song as songSchema } from "../Schema/songSchema.js";
import { album } from "../Schema/albumSchema.js";
import cloudinary from "../lib/cloudinary.js";

const uploadToCloduinary = async (file) => {
    try {
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
            resource_type: "auto",
        }
        )
        return result.secure_url
    } catch (error) {
        console.log("Error in uploadToCloduinary", error);
    }
}
export const createSong = async (req, res, next) => {
    try {
        if (!req.files || !req.files.songCoverPic || !req.files.songAudioUrl) {
            res.status(400).json({ message: "Please upload all files" })
        }
        const { title, artist, duration, albumId } = req.body;
        const songCoverPicURL = await uploadToCloduinary(req.files.songCoverPic)
        const songAudioUrlURL = await uploadToCloduinary(req.files.songAudioUrl)
        const song = new songSchema({
            title,
            artist,
            duration,
            albumId: albumId || null,
            songCoverPic: songCoverPicURL,
            songAudioUrl: songAudioUrlURL
        })

        await song.save()

        if (albumId) {
            album.findByIdAndUpdate(albumId, {
                $push: { song: song._id }
            })
        }

        res.status(200).json(song)
    } catch (error) {
        next(error)

    }

}
export const deleteSong=async(req,res,next)=>{
    try {
        const {id}=req.params;
        const songToDelete=await songSchema.findbyid(id)
        if(songToDelete)
        {
           await songSchema.findByIdAndDelete(id)
           if(songToDelete.albumId)
            {
                await album.findByIdAndUpdate(song.albumId,{
                    $pull:{song:songToDelete._id}
                })
            }
        }
      res.status(200).json({message:`song has been deleted ${songToDelete}`})
    } catch (error) {
        next(error)
    }

}
export const createAlbum=async(req,res,next)=>{
    try {
         if(!req.files||!req.files.albumCoverPic)
         {
            res.status(400).json({ message: "Please upload all files" })  
         }
   
        const { title, artist, releaseYear,song } = req.body;

        const albumCoverPicUrl=uploadToCloduinary(req.files.albumCoverPic)
        const albumCreation=new album({
            title,
            artist,
            releaseYear,
            albumCoverPic:albumCoverPicUrl
        });
    return res.status(200).json({
        message:`album has been created ${albumCreation}`
    })
    } catch (error) {
        next(error)
    }

}

export const deleteAlbum=async (req,res,next)=>{
try {
    const {id}=req.params;
    if(await album.findById(id))
    {
        
    const deletedAlbum=await album.findByIdAndDelete(id)
    res.status(200).json({message: `album is succesfully deleted ${deletedAlbum}`})
    }
    else{
        res.status(400).json({message:"song dosent exist"})
    }
} catch (error) {
    next(error)
}
}

export const checkAdmin=async (req,res,next)=>{
    res.status(200).json({admin:true})
}