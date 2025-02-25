// src/controllers/metricsController.js
const metricsService = require('../services/metricsService');

/**
 * Controlador para obtener las métricas consolidadas.
 */
const getMetrics = (req, res) => {
  try {
    const data = metricsService.getMetrics();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las métricas' });
  }
};

module.exports = {
  getMetrics
};
