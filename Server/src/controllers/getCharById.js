const axios = require("axios")

const URL = "https://rym2.up.railway.app/api/character" 
// `${URL}/${id}?key=${API_KEY}`

// https://rym2.up.railway.app/api/character/1?key=henrystaff

const API_KEY = "henrystaff"

// const getCharById = (res, id) => {
//     axios.get(`${URL}/${id}?key=${API_KEY}`)
//     .then(response => response.data)
//     .then(data => {
//         const character = {
//             id: data.id,
//             name: data.name,
//             gender: data.gender,
//             species: data.species,
//             origin: data.origin,
//             image: data.image,
//             status: data.status,
//             location: data.location
//         }
//         return res
//             .writeHead(200, {"Content-Type": "application/json"})
//             .end(JSON.stringify(character))
//     })
//     .catch((error) => {
//         return res
//             .writeHead(500, {"Content-Type": "text/plain"})
//             .end(JSON.stringify({ message: error.message}))
//     })
// }



const getCharById = async (req, res) => {
    const { id } = req.params

    try {
        const {data} = await axios.get(`${URL}/${id}?key=${API_KEY}`)
        
            const character = {
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin,
                image: data.image,
                status: data.status,
                location: data.location
            }

            if (character.name !== undefined && character.name !== "") {
                return res.status(200).json(character)
            } else {
                res.status(404).json("Not Found")
            }       
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }


}


module.exports = {getCharById}