import express from "express";
import CartProduct from "../models/cartProducts.js";
import auth from "../middleware/auth.js";
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

routerCart.get("/cart/one", auth, async (req, res) => {
  try {
    const cart = await CartProduct.find({owner: req.user._id})
    if (!cart) {
      res.status(404).send('There is nothing here!')
    }
    res.send(cart)
  } catch (error) {
    res.status(500).send({error: error.message});
  }
});

routerCart.delete("/cart/:id", auth, async (req, res) => {
  const productId = req.params.id;
  const userId = req.user._id; // Obtiene el ID del usuario autenticado desde el middleware de autenticación

  try {
    // Busca el producto en el carrito del usuario por su ID y el ID del propietario (usuario autenticado)
    const cartProduct = await CartProduct.findOneAndDelete({ _id: productId, owner: userId });

    if (!cartProduct) {
      return res.status(404).send({ error: 'Producto no encontrado en el carrito' });
    }

    res.status(200).send({ message: 'Producto eliminado del carrito correctamente', deletedProduct: cartProduct });
  } catch (error) {
    console.error('Error al eliminar producto del carrito:', error);
    res.status(500).send({ error: 'Error interno del servidor al eliminar el producto del carrito' });
  }
});


export default routerCart;
