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
