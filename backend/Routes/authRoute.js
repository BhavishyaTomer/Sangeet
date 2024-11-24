import express from 'express';
const authRouter = express.Router();
import { user } from '../Schema/userSchema.js';
console.log("control")
authRouter.post("", async (req, res,next) => {
    try {
        const { id, firstName, lastName, imageUrl } = req.body;

        // Check if user already exists
        console.log("got hit in controller")
        const connectingUser = await user.findOne({ clerkId: id });
        if (!connectingUser) {
            // Create a new user
            await user.create({
                clerkId: id,
                fullName: `${firstName} ${lastName}`,
                image: imageUrl,
            });
        }

        res.status(200).json({ success: true });
    } catch (error) {
        console.log("Error:", error);
        next(error)
    }
});

export default authRouter; 
