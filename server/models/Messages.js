const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  room: { type: mongoose.Schema.Types.ObjectId, ref: "Room"},
  content: { type: String, required: true },
}, {timestamps: true});

modules.export = mongoose.model("Message", messageSchema)