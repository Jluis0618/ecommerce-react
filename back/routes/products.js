import express from "express";
import Product from "../models/products.js";

const router = express.Router();

// Create

router.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all products

router.get("/products", async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
});

// Read one product

router.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(404).json({ error: err.message });
  }
});

// Update product

router.put("/products/:id", async (req, res) => {
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

router.delete("/products/:id", async (req, res) => {
  try {
    const products = await Product.findByIdAndDelete(req.params.id);
    res.json(products);
  } catch (error) {
    res.status(404).json({ error: "Not found" });
  }
});

// Filter product

router.get("/products/category/:category", async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    res.json(products);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.get("/products/name/:name", async (req, res) => {
  try {
    const products = await Product.find({ name: req.params.name });
    res.json(products);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

export default router;
