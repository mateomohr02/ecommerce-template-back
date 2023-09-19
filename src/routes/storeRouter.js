const express = require("express");
const { getProductById, createProduct, updateProduct, deleteProduct, getProducts } = require("../controllers/store/productControllers");

const storeRouter = express.Router();
//ALL PRODUCTS
// Crear un nuevo producto
storeRouter.post("/products", createProduct);

storeRouter.get("/products", getProducts);

// Obtener un producto por su ID
storeRouter.get("/products/:id", getProductById);


// Actualizar un producto existente
storeRouter.put("/products/:id", updateProduct);

// Eliminar un producto
storeRouter.delete("/products/:id", deleteProduct);

module.exports = storeRouter;