import Reservation from '../models/Reservation.js';

class ReservationService {
  static async createReservation(reservationData) {
    const { habitacion_id, fecha_entrada, fecha_salida } = reservationData;

    // Verificar disponibilidad de la habitación
    const isAvailable = await Reservation.checkAvailability(habitacion_id, fecha_entrada, fecha_salida);
    if (!isAvailable) {
      throw new Error('La habitación no está disponible en las fechas seleccionadas');
    }

    // Crear la reserva
    return await Reservation.create(reservationData);
  }

  static async getReservation(reservationId) {
    return await Reservation.getById(reservationId);
  }

  static async updateReservation(reservationId, updateData) {
    return await Reservation.update(reservationId, updateData);
  }

  static async deleteReservation(reservationId) {
    return await Reservation.delete(reservationId);
  }
}

export default ReservationService;