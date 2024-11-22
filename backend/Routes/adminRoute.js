import express from "express";
import { isAdminRoute,protectedRoute } from "../middleware/authMiddle.js";
import { createAlbum, createSong, deleteAlbum, deleteSong,checkAdmin } from "../controller/adminController.js";
const adminRouter=express.Router();
adminRouter.get("/check",protectedRoute,isAdminRoute,checkAdmin)
adminRouter.post("/songs",protectedRoute,isAdminRoute,createSong)
adminRouter.delete("/songs/:id",protectedRoute,isAdminRoute,deleteSong)
adminRouter.post("/album",protectedRoute,isAdminRoute,createAlbum)
adminRouter.delete("/album/:id",protectedRoute,isAdminRoute,deleteAlbum)
export default adminRouter