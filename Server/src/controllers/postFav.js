const { Favorites } = require("../DB_connection")

module.exports = async (req, res) => {
    try {
        const {id, name, origin, status, image, species, gender} = req.body

        if (![id, name, origin, status,image,species,gender].every(Boolean)) {
            return res.status(401).json({message:"Faltan datos"})
        }

        await Favorites.findOrCreate({
            where:{id, name, origin, status, image, species, gender}
        })

        const allFavs = await Favorite.findAll()

        return res.status(200).json(allFavs)

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}