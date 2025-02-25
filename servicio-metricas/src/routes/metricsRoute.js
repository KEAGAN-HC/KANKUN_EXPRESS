// src/routes/metricsRoute.js
const express = require('express');
const router = express.Router();
const metricsController = require('../controllers/metricsController');

// GET /metrics/ -> retorna las métricas
router.get('/', metricsController.getMetrics);

module.exports = router;
