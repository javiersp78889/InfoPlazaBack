import Alquileres from "../models/Alquileres.model"

export const librosAlquileres = async (req, res) => {
    const { libro, nombre } = req.body
    const obj = {
        nombre: nombre.toLowerCase().trim(),
        libro: libro.toLowerCase().trim()
    }
    try {
        const register = await Alquileres.create(obj)
        res.status(201).json({ mensaje: "Creado", register })
        console.log(obj)
    } catch (error) {
        res.status(401).json({ mensaje: error })
    }

}