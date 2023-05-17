
const db = require("../db/dbConfig");

// Index query
const getAllProducts = async () => {
  try {
    const allProducts = await db.any("SELECT * FROM product");
    return allProducts;
  } catch (error) {
    return error;
  }
};

// Show query
const getAProduct = async (id) => {
  try {
    const oneProduct = await db.one("SELECT * FROM product WHERE id=$1", id);
    return oneProduct;
  } catch (error) {
    return error;
  }
};

// Create query

const addAProduct = async (snack) => {
  const { name, description, price, rating, is_favorite, image_url } = snack;

  try {
    const newProduct = await db.one(
        "INSERT INTO product (name, description, price, rating, is_favorite, image_url, year, mileage) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
        [name, description, price, rating, is_favorite, image_url, year, mileage]
      );
      return newProduct;
  } catch (error) {
    return error;
  }
};

// Delete query
const deleteAProduct = async (id) => {
  try {
    const deletedProduct = await db.one(
      "DELETE FROM product WHERE id = $1 RETURNING *",
      id
    );
    return deletedProduct;
  } catch (error) {
    return error;
  }
};

// Update query
const updateAProduct = async (id, snack) => {
  const { name, description, price, rating, is_favorite, image_url } =
    product;
  try {
    const updatedProduct = await db.one(
        "UPDATE product SET name = $1, description = $2, price = $3, rating = $4, is_favorite = $5, image_url = $6, year = $7, mileage = $8 WHERE id = $9 RETURNING *",
        [name, description, price, rating, is_favorite, image_url, year, mileage, id]
      );
      return updatedProduct;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllProducts,
  getAProduct,
  addAProduct,
  deleteAProduct,
  updateAProduct,
};