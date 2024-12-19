import Computadoras from "../models/Computadoras.models"

export const AlquilerComputadora = async (req, res) => {
    const { numero, nombre } = req.body

    if (!numero || !nombre) {
        res.status(400).json('Faltan Datos')
    }
    try {
        const response = await Computadoras.create(req.body)
        res.status(201).json({mensaje:'Creado'})

    } catch (error) {
        res.status(401).json({ mensaje: error })

    }

}