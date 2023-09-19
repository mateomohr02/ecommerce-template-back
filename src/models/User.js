const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // Definición del modelo User
  const User = sequelize.define('User', {
    // Definición de campos y sus propiedades aquí
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'user',
    },
  }, {
    timestamps: false,
  });

  return User;
};