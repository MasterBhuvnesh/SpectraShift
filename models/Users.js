// TRANING THE MODEL
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  id: Number,
  quote: String,
  author: String,
});
const UserModel = mongoose.model("daily_quotes", UserSchema);
module.exports = UserModel;
