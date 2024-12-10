import Libros from "../models/Libros.models"

export const findLibros = async (req, res) => {
    const { nombre } = req.body
    console.log(nombre)
    const name = nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim()

    const response = await Libros.findAll({ where: { nombre: name } })
    if (response) {
        res.json(response)
        console.log(response)
    } else {
        res.json({ mensaje: 'No se encontro libros con el nombre dado' })
    }
}

export const createLibros = async (req, res) => {
    try {
        console.log(`creando`)
        const { nombre, autor, estante, cantidad,numero } = req.body
        const name = nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim()
        const creator = autor.toLowerCase().trim()

        const obj = {
            nombre: name,
            autor: creator,
            estante,
            cantidad,
            numero
        }
        console.log(obj)
        const response = await Libros.create(obj)
        res.status(200).json({ mensaje: 'Creado' ,response})
    } catch (error) {
        res.status(401).json(error)

    }

}
