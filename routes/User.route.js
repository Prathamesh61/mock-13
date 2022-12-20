const { Router } = require("express");
require("dotenv").config();

const { UserModel } = require("../models/User.model");

const userRouter = Router();

userRouter.get("/", async (req, res) => {
  const users = await UserModel.find();
  res.send(users);
});

userRouter.post("/create", async (req, res) => {
  const newUser = new UserModel(req.body);
  try {
    await newUser.save();
    res.send({ "msg": "User Created", "user": newUser });
  } catch (err) {
    res.send({ "msg": "something went wrong" });
    console.log(err);
  }
});

userRouter.patch("/edit/:userId", async (req, res) => {
  const { userId } = req.params;
  const patchedUser = await UserModel.findOneAndUpdate(
    { _id: userId },
    req.body
  );
  if (patchedUser) {
    res.send({ "msg": "User Updated", "after update": patchedUser });
  } else {
    res.send({ "msg": "Failed to update" });
  }
});

module.exports = {
  userRouter,
};
