const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  score: { type: Number, require: true, default: 0 },
  level: { type: String, require: true },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
