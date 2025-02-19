import express from "express"
import cors from "cors"
import habitacionRoutes from "./routes/habitacionRoutes.js"
import errorHandler from "./middlewares/errorHandler.js"
import { swaggerDocs } from "./config/swaggerConfig.js"

const app = express()
const PORT = process.env.PORT || 4002

app.use(cors())
app.use(express.json())

swaggerDocs(app)

// Cambia esta línea para incluir el prefijo '/api'
app.use("/api/habitaciones", habitacionRoutes)

app.use(errorHandler)

app.listen(PORT, () => console.log(`Servicio de Habitaciones corriendo en el puerto ${PORT}`))

