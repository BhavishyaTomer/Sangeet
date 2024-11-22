import { album as albumSchema} from "../Schema/albumSchema.js";

export const getAllAlbum=async(req,res,next)=>{
    try {
        const albums=albumSchema.find()
        res.status(200).json(album)
    } catch (error) {
        next(error)
    }
}
export const getOneAlbum=async(req,res,next)=>{
    try {
        const {id}=req.params
        const albums=albumSchema.findById(id).populate("song")
        if(albums)
        {
            res.status(200).json(albums)
        }
        res.status(400).json({message:"album dosent exist"})
        
    } catch (error) {
        next(error)
    }
}