import express from "express";
import User from "../models/users.js";
const routerUser = express.Router();
import auth from '../middleware/auth.js'

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
    const {email, password} = req.body
    const user = await User.userExist(email, password);
    const token = await user.generateJwt();
    res.send({ user, token, rol: user.rol});
  } catch (error) {
    res.status(400).send({error: error.message});
  }
});

routerUser.post('/logout', auth, async (req, res) => {
  try {
    if (req.user) {
      req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token);
      await req.user.save();

      res.send();
    } else {
      res.status(401).send({ error: 'Unauthorized' });
    }
  } catch (error) {
    res.status(500).send(error)
  }
})

routerUser.get("/user/info", auth, async (req, res) => {
  try {
    // El middleware 'auth' ya ha verificado la autenticación del usuario y ha añadido el usuario al objeto de solicitud (req)
    const user = req.user;
    res.send(user); // Devuelve la información del usuario en la respuesta
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


routerUser.delete('/delete/:id', auth, async(req, res) => {
  try {
   const user = User.findById(req.params.id)
   if(!user) {
    res.status(404).send({error: 'Usuario no encontrado'})
   }
  await user.deleteOne()
  } catch (error) {
    res.status(500).send({error: error.message})
  }
})


export default routerUser;
