// src/services/metricsService.js
const axios = require('axios');

// Ejemplo de datos simulados (si estás usando NODE_ENV=test)
const mockReservasData = [
  { reserva_id: 1, estado: 'Activa', fecha_entrada: '2025-02-24' },
  { reserva_id: 2, estado: 'Cancelada', fecha_entrada: '2025-02-24' },
  { reserva_id: 3, estado: 'Activa', fecha_entrada: '2025-02-25' }
];

// Objeto donde guardamos todas las métricas
let metrics = {
  reservasActivas: 0,
  cancelaciones: 0,
  reservasPorDia: {},       // { '2025-02-24': 2, '2025-02-25': 1 }
  diaMayorDemanda: null,    // '2025-02-24'
  cantidadReservasDia: 0,   // 2
  reservasPorMes: {},       // { '2025-02': 3 }
  mesMayorDemanda: null,    // '2025-02'
  cantidadReservasMes: 0    // 3
};

/**
 * Llama al microservicio de reservas o usa datos simulados, según el entorno,
 * y actualiza las métricas.
 */
async function fetchMetrics() {
  try {
    let reservasData;

    // Si estamos en modo test, usamos datos falsos (mock)
    if (process.env.NODE_ENV === 'test') {
      console.log('Usando datos simulados (mock) para las reservas...');
      reservasData = mockReservasData;
    } else {
      // De lo contrario, llamamos al microservicio real
      console.log('Llamando al microservicio real de reservas...');
      const reservasResponse = await axios.get('http://localhost:4003/api/reservas');
      reservasData = reservasResponse.data; // Se espera un arreglo de reservas
    }

    // 1. Contar reservas activas
    const reservasActivas = reservasData.filter(r => r.estado === 'activa').length;

    // 2. Contar cancelaciones
    const cancelaciones = reservasData.filter(r => r.estado === 'cancelada').length;

    // 3. Agrupar reservas por día
    let reservasPorDia = {};
    reservasData.forEach(reserva => {
      const fecha = reserva.fecha_entrada; // Se asume formato 'YYYY-MM-DD'
      reservasPorDia[fecha] = (reservasPorDia[fecha] || 0) + 1;
    });

    // 4. Determinar el día con mayor demanda
    let diaMayorDemanda = null;
    let cantidadReservasDia = 0;
    for (const day in reservasPorDia) {
      if (reservasPorDia[day] > cantidadReservasDia) {
        cantidadReservasDia = reservasPorDia[day];
        diaMayorDemanda = day;
      }
    }

    // 5. Agrupar reservas por mes (YYYY-MM)
    let reservasPorMes = {};
    reservasData.forEach(reserva => {
      const [year, month] = reserva.fecha_entrada.split('-');
      const key = `${year}-${month}`; // Ejemplo: '2025-02'
      reservasPorMes[key] = (reservasPorMes[key] || 0) + 1;
    });

    // 6. Determinar el mes con mayor demanda
    let mesMayorDemanda = null;
    let cantidadReservasMes = 0;
    for (const mes in reservasPorMes) {
      if (reservasPorMes[mes] > cantidadReservasMes) {
        cantidadReservasMes = reservasPorMes[mes];
        mesMayorDemanda = mes; // '2025-02'
      }
    }

    // 7. Actualizar el objeto metrics
    metrics.reservasActivas = reservasActivas;
    metrics.cancelaciones = cancelaciones;
    metrics.reservasPorDia = reservasPorDia;
    metrics.diaMayorDemanda = diaMayorDemanda;
    metrics.cantidadReservasDia = cantidadReservasDia;
    metrics.reservasPorMes = reservasPorMes;
    metrics.mesMayorDemanda = mesMayorDemanda;
    metrics.cantidadReservasMes = cantidadReservasMes;

    console.log('Métricas actualizadas:', metrics);
  } catch (error) {
    console.error('Error al obtener las métricas:', error.message);
  }
}

/**
 * Devuelve las métricas actuales.
 */
function getMetrics() {
  return metrics;
}

module.exports = {
  fetchMetrics,
  getMetrics
};
