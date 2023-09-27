const { Product, Category, Brand } = require('../../db');

exports.getCategories = async (req,res) => {
    try {
        const categories = await Category.findAll();

        if (categories.length === 0) {
            return res.status(404).json({ message: 'No Categories' });
        }
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
}
