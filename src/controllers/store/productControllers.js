const { Product, Category, Brand} = require('../../db');

// POST /products
exports.createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      stock,
      category,
      brand,
      image_path
    } = req.body;

    // Verificar si la categoría ya existe o crearla
    let categoryInstance = await Category.findOne({ where: { name: category } });
    if (!categoryInstance) {
      categoryInstance = await Category.create({ name: category });
    }

    // Verificar si la marca ya existe o crearla
    let brandInstance = await Brand.findOne({ where: { name: brand } });
    if (!brandInstance) {
      brandInstance = await Brand.create({ name: brand });
    }

    // Crear el producto en la base de datos y relacionarlo con la categoría y la marca
    const product = await Product.create({
      name,
      description,
      brandName: brand,
      price,
      stock,
      image_path,
      CategoryId: categoryInstance.id, // Asocia el producto con la categoría
      BrandId: brandInstance.id, // Asocia el producto con la marca
    });

    res.status(201).json(product);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


exports.getProductsCategory = async (req,res) => {
  try {
    const { id } = req.params
    
    const products = await Product.findAll({where: { CategoryId: id }})
    
    if (products.length === 0) {
      return res.status(404).json({ message: 'No Products found for the category' });
    }
    
    res.status(200).json(products);
  
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
}


  exports.getProductById = async (req, res) => {
    const { id } = req.params;
    try {
      // Obtener el producto por su ID
      const product = await Product.findByPk(id);
  
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.status(200).json(product);
    } catch (error) {
      console.error('Error getting product:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  

// PUT /products/:productId
exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, description,stock } = req.body;
    try {
      const product = await Product.findByPk(id);
  
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      // Actualizar los campos del producto
      await product.update({ name, price, description,stock });
  
      res.status(200).json(product);
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
 

  
// DELETE /products/:productId
exports.deleteProduct = async (req, res) => {
    const { productId } = req.params;
    try {
      const product = await Product.findByPk(productId);
  
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      // Establecer el campo "deleted" en true en lugar de eliminar físicamente el producto
      await product.update({ deleted: true });
  
      res.status(200).json({ message: 'Product deleted' });
    } catch (error) {
      console.error('Error deleting product:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  

  exports.getProducts = async (req, res) => {
    try {
      const products = await Product.findAll();
  
      if (products.length === 0) {
        return res.status(404).json({ message: 'No products found' });
      }
  
      res.status(200).json(products);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error' });
    }
  }; 