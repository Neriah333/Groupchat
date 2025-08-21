const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, require: true, unique: true },
  socketId: { type: String },
  isOnline: {type: Boolean, default: false }
}, {timestamps: true });

modules.exports = mongoose.model("User", userSchema)