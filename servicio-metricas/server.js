// server.js
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3003;

// Importar las rutas y el servicio
const metricsRoutes = require('./src/routes/metricsRoute');
const { fetchMetrics } = require('./src/services/metricsService');

// Middleware
app.use(express.json());

// Rutas
app.use('/metrics', metricsRoutes);

// Lógica de polling: actualiza las métricas cada 30 segundos
setInterval(fetchMetrics, 30000);
// O bien, haz una llamada inicial para tener datos desde el principio:
fetchMetrics();

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servicio de Métricas corriendo en http://localhost:${port}`);
});
