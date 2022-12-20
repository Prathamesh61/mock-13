const { Router } = require("express");
require("dotenv").config();

const { WordModel } = require("../models/Word.model");

const wordRouter = Router();

wordRouter.get("/", async (req, res) => {
  const word = await WordModel.find();
  res.send({ "word": word });
});

wordRouter.patch("/edit/63a17a662077141ac4c00a05", async (req, res) => {
  function createWord() {
    let temp = Math.random().toString();
    temp = Number(temp[16]);
    if (temp < 3) {
      temp = 3;
    }
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let random = function (n) {
      return Math.floor(Math.random() * n);
    };
    let word = "";
    for (let i = 0; i < temp; i++) {
      let randomAlpha = alpha[random(alpha.length)];
      word += randomAlpha;
    }
    return word;
  }
  const newWord = await WordModel.findOneAndUpdate(
    { _id: "63a17a662077141ac4c00a05" },
    { word: createWord() }
  );
  if (newWord) {
    res.send({ "word": newWord });
  } else {
    res.send({ "msg": "Failed to update" });
  }
});

module.exports = {
  wordRouter,
};
