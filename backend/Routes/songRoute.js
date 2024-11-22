import express from "express";
import { getAllSongs, getOneSong,featuredSong,trendingSong,madeForYouSong } from "../controller/songController.js";
import { isAdminRoute, protectedRoute } from "../middleware/authMiddle.js";
export const songRouter=express.Router();

songRouter.get("/",protectedRoute,isAdminRoute,getAllSongs)
songRouter.get("/:id",protectedRoute,isAdminRoute,getOneSong)
songRouter.get("/feature",featuredSong)
songRouter.get("/trending",trendingSong)
songRouter.get("/special",madeForYouSong)


