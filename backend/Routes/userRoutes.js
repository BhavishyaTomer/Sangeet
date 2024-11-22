import express from "express";
import { getAllUser } from "../controller/userController.js";
import { protectedRoute } from "../middleware/authMiddle.js";
export const userRouter=express.Router();

userRouter.get("/",protectedRoute,getAllUser)

