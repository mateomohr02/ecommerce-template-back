const {Brand} = require('../../db');

exports.getBrands = async (req,res) => {
    try {
        const brands = await Brand.findAll();

        if (brands.length === 0) {
            return res.status(404).json({ message: 'No Brands' });
        }
        res.status(200).json(brands);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
}

exports.updateBrandImage = async (req,res) => {
    try {
        const { id } = req.params

        const { imgUrl } = req.body

        const brand = await Brand.findByPk(id)

        if (!brand) {
            return res.status(404).json({ message: 'Brand not found'})
        }

        await brand.update( { image_path: imgUrl } )

        res.status(200).json(brand)

    } catch (error) {
        res.status(500).json({ message: 'Server Error while updating the brand' });
    }
}