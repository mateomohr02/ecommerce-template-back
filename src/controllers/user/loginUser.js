const userService = require("../../services/user.service")

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    
    try {
      const { user, token } = await userService.loginUser(email, password);
  
      res.status(200).json({
        success: true,
        message: 'Se ha iniciado Sesión correctamente',
        user,
        token,
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };
  
  