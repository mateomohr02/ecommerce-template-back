const express = require("express");
const { getProductById, createProduct, updateProduct, deleteProduct, getProducts, getProductsCategory } = require("../controllers/store/productControllers");
const { getCategories } = require("../controllers/store/categories")


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

storeRouter.get("/categories", getCategories)

storeRouter.get("/categories/:id", getProductsCategory)

module.exports = storeRouter;