import * as reservationModel from "../models/reservationModel.js";

export const getAllReservations = async (req, res, next) => {
  try {
    const reservations = await reservationModel.getAllReservations();
    res.json(reservations);
  } catch (error) {
    next(error);
  }
};

export const getReservationById = async (req, res, next) => {
  try {
    const { reserva_id } = req.params;
    const reservation = await reservationModel.getReservationById(reserva_id);
    if (!reservation) {
      const error = new Error("Reserva no encontrada");
      error.statusCode = 404;
      throw error;
    }
    res.json(reservation);
  } catch (error) {
    next(error);
  }
};

export const createReservation = async (req, res, next) => {
  try {
    const newReservation = await reservationModel.createReservation(req.body);
    res.status(201).json(newReservation);
  } catch (error) {
    next(error);
  }
};

export const updateReservation = async (req, res, next) => {
  try {
    const { reserva_id } = req.params;
    const updatedReservation = await reservationModel.updateReservation(reserva_id, req.body);
    res.json(updatedReservation);
  } catch (error) {
    next(error);
  }
};

export const deleteReservation = async (req, res, next) => {
  try {
    const { reserva_id } = req.params;
    await reservationModel.deleteReservation(reserva_id);
    res.json({ message: "Reserva eliminada correctamente" });
  } catch (error) {
    next(error);
  }
};
