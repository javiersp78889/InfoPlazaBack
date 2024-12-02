export const DataLibro = async (req, res, next) => {
    const { nombre, autor, estante, cantidad } = req.body
    if (!nombre || !autor || !estante || !cantidad) {
        res.status(401).json({ mensaje: 'Faltan datos' })
    }
    else{
        next()
    }
}