import Libros from "../models/Libros.models"

export const verifyLibro = async (req, res, next) => {
    const { nombre } = req.body
    const name = nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim()
    try {

        const response = await Libros.findAll({ where: { nombre: name } })
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
