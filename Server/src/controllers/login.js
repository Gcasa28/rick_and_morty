const { User } = require("../DB_connection")

module.exports = async (req, res) => {
try {
    const {email, password} = req.query

    if (!email || !password) {
        return res.status(400).json({error:"Faltan datos"})
    }

    const logUser = await User.findOne({
        where:email
    })

    if (!logUser) {
        return res.status(404).json({message:'Usuario no encontrado'})}

    return logUser.password === password ? res.status(200).json({access:true}) : res.status(401).json({access:false, message: 'Usuario o contrasena incorrecta'})

} catch (error) {
    res.status(500).json({error:error.message})
}}