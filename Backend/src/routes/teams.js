import express from "express";
import { authenticateToken } from "../middleware/auth.js";


const router = express.Router();

router.get("/", (req, res) => {
    res.send("Rutas de equipos funcionando");
});

export default router; 
