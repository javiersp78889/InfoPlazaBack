export const DataLibro = async (req, res, next) => {
    const { nombre, autor, estante, cantidad, numero } = req.body
    if (!nombre || !autor || !estante || !cantidad || !numero) {
        res.status(401).json({ mensaje: 'Faltan datos' })
    }
    else {
        next()
    }
}
