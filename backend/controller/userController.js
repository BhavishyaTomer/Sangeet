import { user } from "../Schema/userSchema.js";
export const getAllUser=async(req,res,next)=>{
    try {
        const currentId=req.auth.userId
        const allUser=await user.find({clerkId:{$ne:currentId}})
        res.status(200).json(allUser)
    } catch (error) {
        next(error)
    }
}