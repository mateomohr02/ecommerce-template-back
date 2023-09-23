require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const {
  UserModel,
  ProductModel,
  CartModel,
  CartProductModel,
  CategoryModel,
  BrandModel
} = require("./models/index");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/ecommerce`,
  {
    logging: false,
    native: false,
  }
); 
//     
//connects models to sequelize

UserModel(sequelize);
ProductModel(sequelize);
CartModel(sequelize);
CartProductModel(sequelize);
CategoryModel(sequelize);
BrandModel(sequelize);

const {
  User,
  Product,
  Cart,
  CartProduct,
  Category,
  Brand
} = sequelize.models;

User.hasOne(Cart, { foreignKey: 'userId' });
Cart.belongsTo(User, { foreignKey: 'userId' });
Cart.belongsToMany(Product, { through: CartProduct, foreignKey: 'cartId' });
Product.belongsToMany(Cart, { through: CartProduct, foreignKey: 'productId' });
Product.belongsTo(Category, { foreignKey: 'CategoryId' }); // Un producto pertenece a una categoría
Category.hasMany(Product, { foreignKey: 'CategoryId' });
Product.belongsTo(Brand, { foreignKey: 'BrandId' }); // Un producto pertenece a una marca
Brand.hasMany(Product, { foreignKey: 'BrandId' });

// Product.hasMany(Reviews);

module.exports = {
  conn: sequelize,
  ...sequelize.models,
  // Agrega los demás modelos aquí...
};