import express from "express";
import User from "../models/users.js";

const routerUser = express.Router();

// Create user

routerUser.post("/register", async (req, res) => {
  const user = new User(req.body);
  
  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

routerUser.post("/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

export default routerUser;
