require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const {
  UserModel,
  ProductModel,
  CartModel,
  CartProductModel
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
CartProductModel(sequelize)

const {
  User,
  Product,
  Cart,
  CartProduct
} = sequelize.models;


User.hasOne(Cart, { foreignKey: 'userId' });
Cart.belongsTo(User, { foreignKey: 'userId' });
Cart.belongsToMany(Product, { through: CartProduct, foreignKey: 'cartId' });
Product.belongsToMany(Cart, { through: CartProduct, foreignKey: 'productId' });


// Product.hasMany(Reviews);

module.exports = {
  conn: sequelize,
  ...sequelize.models,
  // Agrega los demás modelos aquí...
};