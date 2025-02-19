import swaggerJSDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Habitaciones - Kankun Express",
      version: "1.0.0",
      description: "Documentación de la API de habitaciones usando Swagger",
    },
    servers: [
      {
        url: "http://localhost:4002", // Asegúrate de que este puerto coincida con el de tu servidor
      },
    ],
  },
  apis: ["./routes/*.js"], // Asegúrate de que esta ruta sea correcta
}

const swaggerSpec = swaggerJSDoc(options)

export const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  console.log("📄 Documentación disponible en: http://localhost:4002/api-docs")
}

