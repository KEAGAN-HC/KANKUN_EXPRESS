import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Reservas",
      version: "1.0.0",
      description: "Documentación de la API para gestionar reservas.",
    },
    servers: [{ url: "http://localhost:4003", description: "Servidor Local" }],
  },
  apis: ["./routes/*.js"], // Apunta a las rutas donde están los comentarios Swagger
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export { swaggerUi, swaggerSpec };
