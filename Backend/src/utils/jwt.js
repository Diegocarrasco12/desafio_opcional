import jwt from "jsonwebtoken";

const secretKey = "miClaveSecreta";

export const generateToken = (payload) => {
    return jwt.sign(payload, secretKey, { expiresIn: "1h" });
};

// Verificar un token
export const verifyToken = (token) => {
    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        throw new Error("Token inválido o expirado");
    }
};
