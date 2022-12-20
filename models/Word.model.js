const mongoose = require("mongoose");

const wordSchema = new mongoose.Schema({
  word: { type: String, require: true },
});

const WordModel = mongoose.model("word", wordSchema);

module.exports = {
  WordModel,
};
