import express from "express";
import CartProduct from "../models/cartProduct";
import auth from "../middleware/auth";
const routerCart = express.Router();

routerCart.post("/cart", auth, async (req, res) => {
  const cart = new CartProduct({
    ...req.body,
    owner: req.user._id,
  });

  try {
    await cart.save();
    res.status(201).send(cart);
  } catch (error) {
    res.status(400).send(error);
  }
});

routerCart.get("/cart", auth, async (req, res) => {
  try {
    await req.user.populate("cart").execPopulate();
    res.send(req.user.cart);
  } catch (error) {
    res.status(500).send(error);
  }
});

routerCart.get("/cart/:id", auth, async (req, res) => {
  try {
    const cart = await CartProduct.findOne({ _id: req.params.id, owner: req.user._id });
    
    if(!cart) {
        res.status(404).send()
    }
    res.send(cart)
} catch (error) {
    res.status(500).send()
  }
});

export default routerCart;
