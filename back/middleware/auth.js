import jwt from "jsonwebtoken";
import User from "../models/users.js";

const auth = ( async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace('Bearer ', '');
    // console.log('Token recibido:', token)
    const decode = jwt.verify(token, "a");
    // console.log('Token verificado:', decode)
    const user = await User.findOne({ _id: decode._id, "tokens.token": token });
    // console.log('Usuario encontrado', user);
    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    console.log(e)
    res.status(401).send({ error: "Auth Error!" });
    // console.log(e);
  }
});

export default auth;
