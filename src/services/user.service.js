const { User } = require("../db")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require('crypto');


const secretKey = crypto.randomBytes(32).toString('hex');
let userService = {};

userService.loginUser = async (email, password) => {
    const user = await User.findOne({ where: { email } });
  
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
  
    const validPassword = await bcrypt.compare(password, user.password);
  
    if (!validPassword) {
      throw new Error("Contraseña incorrecta");
    }
  
    const token = jwt.sign(
      { id: user.id, role: user.role },
      secretKey,
      { expiresIn: "1h" }
    );
  
    return { user, token };
  };

  module.exports = userService;
  