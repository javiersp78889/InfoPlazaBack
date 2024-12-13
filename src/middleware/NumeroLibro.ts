import Libros from "../models/Libros.models"

export const NumeroLibro = async (req, res, next) => {
    const { numero } = req.body
    const numeracion = numero.trim()
    try {

        const response = await Libros.findAll({ where: { numero: numeracion } })
        console.log('VERIFICADOR')
        console.log(response)
        if (response.length > 0) {
            console.log('mayor a 0')
            res.status(401).json({ mensaje: 'Este Libro ya existe', response })
        } else {
            next()
        }

    } catch (error) {

    }
}
