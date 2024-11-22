import express from "express";
import { getAllStats } from "../controller/statsController.js";
export const statRouter=express.Router();

statRouter.get("/",getAllStats)


