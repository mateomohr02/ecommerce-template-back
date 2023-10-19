const express = require("express");
const { getProductById, createProduct, updateProduct, deleteProduct, getProducts, getProductsCategory, getProductsBrand, updateProductStatus } = require("../controllers/store/productControllers");
const { getCategories, updateCategoryImage } = require("../controllers/store/categories");
const { getBrands, updateBrandImage } = require("../controllers/store/brands");

const { authMiddleware } = require("../middlewares/authMiddleware")


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

storeRouter.put("/categories/:id", updateCategoryImage)

storeRouter.get("/categories", getCategories)

storeRouter.get("/categories/:id", getProductsCategory)

storeRouter.get("/brands", getBrands)

storeRouter.get("/brands/:id", getProductsBrand)

storeRouter.put("/brands/:id", updateBrandImage)

storeRouter.put("/admin/product/:id", updateProductStatus)


module.exports = storeRouter;