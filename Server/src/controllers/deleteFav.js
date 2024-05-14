const {Favorite} = require('../DB_connection')

module.exports = async (req, res) => {
    try {
        const {id} = req.params

        await Favorite.destroy({
            where:{id}
        })

        const allFavs = await Favorite.findAll()

        return res.status(200).json(allFavs)
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}