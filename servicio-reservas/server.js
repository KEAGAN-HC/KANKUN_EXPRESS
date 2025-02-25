import express from "express";
import cors from "cors";
import reservationRoutes from "./routes/reservationRoutes.js";
import { swaggerUi, swaggerSpec } from "./config/swaggerConfig.js";
import reservationErrorHandler from "./middlewares/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/reservas", reservationRoutes);

// ✅ Cargar Swagger en `/api-docs`
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(reservationErrorHandler);

const PORT = process.env.PORT || 4003;
app.listen(PORT, () => {
  console.log(`✅ Servidor en http://localhost:${PORT}`);
  console.log(`📄 Documentación en http://localhost:${PORT}/api-docs`);
});
