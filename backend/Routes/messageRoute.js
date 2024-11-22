const express=require('express')
const messageRouter=express.Router();

messageRouter.get("/")
messageRouter.post("/")
messageRouter.delete("/")

module.exports=messageRouter