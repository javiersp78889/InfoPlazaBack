import { Router } from "express";
import { createLibros, findLibros, librosAlquileres } from "../handlers/libros";
import { verifyLibro } from "../middleware/verifyLibro";
import { DataLibro } from "../middleware/DataLibro";
import { NumeroLibro } from "../middleware/NumeroLibro";
const router = Router()


router.post('/find', findLibros)
router.post('/', DataLibro, verifyLibro,NumeroLibro, createLibros)
router.post('/alquiler', librosAlquileres)



export default router;
