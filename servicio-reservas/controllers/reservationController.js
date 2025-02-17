import ReservationService from '../services/reservationServices.js';

class ReservationController {
  static async createReservation(req, res) {
    try {
      const reservation = await ReservationService.createReservation(req.body);
      res.status(201).json(reservation);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getReservation(req, res) {
    try {
      const reservation = await ReservationService.getReservation(req.params.id);
      res.status(200).json(reservation);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  static async updateReservation(req, res) {
    try {
      const reservation = await ReservationService.updateReservation(req.params.id, req.body);
      res.status(200).json(reservation);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async deleteReservation(req, res) {
    try {
      const result = await ReservationService.deleteReservation(req.params.id);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default ReservationController;