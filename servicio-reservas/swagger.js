import express from "express";
import { swaggerUi, swaggerSpec } from "./config/swaggerConfig.js";

const app = express();

// Middleware para exponer Swagger en `/api-docs`
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Iniciar servidor
const PORT = 4003;
app.listen(PORT, () => {
  console.log(`Swagger docs disponibles en http://localhost:${PORT}/api-docs`);
});
