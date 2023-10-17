const bcrypt = require("bcrypt");
const { User, Cart } = require("../../db")


exports.createUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ where: { email } })

        if (existingUser) {
            return res.status(200).json({ success: false, message: "Ya existe un usuario con este correo." })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await User.create({
            email,
            password: hashedPassword
        })

        const newCart = await Cart.create({ userId: newUser.id });

        return res.status(200).json({ success: true, message: "Usuario creado con éxito."})

    } catch (error) {
        return res.status(500).json({ success: false, message: "Server Error" })
    }
}
