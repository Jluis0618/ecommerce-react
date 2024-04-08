import jwt from "jsonwebtoken";
import User from "../models/users";

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decode = jwt.verify(token, "PhP_Cloths");
    const user = await User.findOne({ _id: decode._id, "tokens.token": token });

    if (!user) {
      throw Error();
    }

    req.token = token;
    req.user = user;

    next();
    
  } catch (error) {
    res.status(401).send({ error: "Authentication error" });
  }
};

export default auth;
