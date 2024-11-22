import express from "express";
import { getAllAlbum, getOneAlbum } from "../controller/albumController.js";
const albumRouter=express.Router();

albumRouter.get("",getAllAlbum)
albumRouter.get("/:id",getOneAlbum)


export default albumRouter