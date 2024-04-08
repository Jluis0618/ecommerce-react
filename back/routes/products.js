import express from "express";
import Product from "../models/products.js";

const routerProducts = express.Router();

// Create

routerProducts.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all products

routerProducts.get("/products", async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
});

// Read one product

routerProducts.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(404).json({ error: err.message });
  }
});

// Update product

routerProducts.put("/products/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(product);
  } catch (error) {
    res.status(404).json({ error: err.message });
  }
});

// Delete product

routerProducts.delete("/products/:id", async (req, res) => {
  try {
    const products = await Product.findByIdAndDelete(req.params.id);
    res.json(products);
  } catch (error) {
    res.status(404).json({ error: "Not found" });
  }
});

// Filter product by category

routerProducts.get("/products/category/:category", async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    res.json(products);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Filter product by name

routerProducts.get("/products/name/:name", async (req, res) => {
  try {
    const products = await Product.find({ name: req.params.name });
    res.json(products);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

export default routerProducts;
