import { Router } from "express";
import { createLibros, findLibros } from "../handlers/libros";
import { verifyLibro } from "../middleware/verifyLibro";
import { DataLibro } from "../middleware/DataLibro";
import { NumeroLibro } from "../middleware/NumeroLibro";
const router = Router()


router.post('/find', findLibros)
router.post('/', DataLibro, verifyLibro,NumeroLibro, createLibros)



export default router;
