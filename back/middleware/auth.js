import jwt from "jsonwebtoken";
import User from "../models/users.js";

const auth = ( async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace('Bearer ', '');
    const verify = jwt.verify(token, "a");
    const user = await User.findOne({ _id: verify._id, "tokens.token": token });
    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    console.log(e)
    res.status(401).send({ error: "Auth Error!" });
  }
});

export default auth;
