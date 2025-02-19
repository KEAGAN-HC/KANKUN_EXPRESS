import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Servicio de Habitaciones',
      version: '1.0.0',
      description: 'API para gestionar habitaciones en un hostal.',
    },
    servers: [
      {
        url: 'http://localhost:4002',
        description: 'Servidor local',
      },
    ],
  },
  apis: ['./routes/*.js'], // Ruta a los archivos de rutas para documentar
};

const specs = swaggerJsdoc(options);

export default (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};