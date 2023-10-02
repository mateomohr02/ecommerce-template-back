const {Category} = require('../../db');

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

exports.updateCategoryImage = async (req,res) => {
    try {
        const { id } = req.params

        const { imgUrl } = req.body
        
        const category = await Category.findByPk(id)

        if (!category) {
            return res.status(404).json({ message: 'Category not found'})
        }

        await category.update({image_path: imgUrl})

        res.status(200).json(category)


    } catch (error) {
        res.status(500).json({ message: 'Server Error while updating the product' });
    }
}
