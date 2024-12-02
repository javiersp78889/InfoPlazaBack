import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv'
import Computadoras from "./models/Computadoras.models";
import Impresiones from "./models/Impresiones.models";
import Libros from "./models/Libros.models";
import Alquileres from "./models/Alquileres.model";

dotenv.config()

const database_url = process.env.DATABASE_URL

const db = new Sequelize(database_url, {
    dialect: 'postgres',
    models: [Libros, Impresiones, Computadoras,Alquileres]
})



export default db