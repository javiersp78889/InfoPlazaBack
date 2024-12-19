import express from 'express'
import routerLibros from './routers/routerLibros';
import db from './db';
import cors from 'cors'
import routerComputadoras from './routers/routerComputadoras'

const app = express()

const ConnectDB = async () => {
    try {
        await db.authenticate()
        db.sync()

        console.log('Conexion exitosa')

    } catch (error) {
        console.error(error)

    }
}

ConnectDB()

app.use(express.json())
app.use(cors({ origin: '*' }))
app.use(express.urlencoded({ extended: true }))
app.use('/libros', routerLibros)
app.use('/computadoras', routerComputadoras)

export default app;