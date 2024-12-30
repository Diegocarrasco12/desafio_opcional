import express from "express";
import loginRoutes from "./routes/login.js";
import teamsRoutes from "./routes/teams.js";
import { authenticateToken } from "./middleware/auth.js";


const app = express();
app.use(express.json());

app.use("/login", loginRoutes);
app.use("/equipos", teamsRoutes);

if (process.env.NODE_ENV !== "test") {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}

export default app;

