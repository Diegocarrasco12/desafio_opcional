import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

// Datos del administrador
const adminCredentials = {
    username: "admin",
    password: "1234",
};

// Clave secreta para JWT (puedes usar una más compleja y almacenarla en variables de entorno)
const secretKey = "miClaveSecreta";

// Ruta POST /login
router.post("/", (req, res) => {
    const { username, password } = req.body;

    // Validar credenciales
    if (username === adminCredentials.username && password === adminCredentials.password) {
        // Generar JWT
        const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });
        res.status(200).json({ token });
    } else {
        res.status(400).json({ message: "Credenciales inválidas" });
    }
});

export default router;
