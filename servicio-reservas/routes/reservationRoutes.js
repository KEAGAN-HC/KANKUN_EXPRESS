import express from 'express';
import ReservationController from '../controllers/reservationController.js';

const router = express.Router();

router.post('/', ReservationController.createReservation);
router.get('/:id', ReservationController.getReservation);
router.put('/:id', ReservationController.updateReservation);
router.delete('/:id', ReservationController.deleteReservation);

export default router;