import { Router } from "express";
import { AlquilerComputadora } from "../handlers/computadoras";



const router = Router()


router.post('/alquiler', AlquilerComputadora)



export default router;