import { clerkClient } from '@clerk/express'

export const protectedRoute = async (req, res, next) => {
    console.log("auth is",req.auth)
    if (!req.auth.userId) {
        res.status(401).json({ message: "Unauthirsed" })
        return
    }
    next()
}
export const isAdminRoute = async (req, res, next) => {
    try {
        const currentUser = await clerkClient.users.getUser(req.auth.userId)
        const isAdmin = await currentUser.primaryEmailAddress?.emailAddress == process.env.ADMIN_ID
        if (!isAdmin) {
            return  res.status(401).json({ message: "Unauthirsed" })
           
        }
        next()
    } catch (error) {

    }
}