const mongoose = require('mongoose')
const messageSchema = new mongoose.Schema({
  senderID:{
    type:String,
    required:true
  },
  recieverID:{
    type:String,
    required:true
  },
  message:{
    type:String,
    require:false
  }
}, { timestamps: true })

export const message=mongoose.model("message",messageSchema)