
const express = require("express");
const products = express.Router();


const {
  getAllProducts,
  getAProduct,
  addAProduct,
  deleteAProduct,
  updateAProduct,
} = require("../queries/productsQueries.js");


// INDEX route
products.get("/", async (req, res) => {
  const allProducts = await getAllProducts();

  if (allProducts) {
    res.status(200).json(allProducts);
  } else {
    res.status(404).json({ error: "server error" });
  }
});

// SHOW route
products.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await getAProduct(id);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE route
products.post("/", async (req, res) => {
  const newProduct = req.body;
  try {
    const addedProduct = await addAProduct(newProduct);
    res.status(200).json(addedProduct);
  } catch (error) {
    res.status(404).json({ error: "not found" });
  }
});

// DELETE route
products.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await deleteAProduct(id);
    res.status(200).json(deletedProduct);
  } catch (error) {
    res.status(404).json({ error: "not found" });
  }
});

// UPDATE route
products.put("/:id", async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  try {
    const updatedProduct = await updateAProduct(id, product);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(404).json({ error: "not found" });
  }
});

module.exports = products;