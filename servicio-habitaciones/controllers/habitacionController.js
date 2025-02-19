import * as habitacionModel from "../models/habitacionModel.js";

export const getAllHabitaciones = async (req, res, next) => {
  try {
    const habitaciones = await habitacionModel.obtenerHabitaciones();
    res.json(habitaciones);
  } catch (error) {
    next(error);
  }
};

export const getHabitacionById = async (req, res, next) => {
  try {
    const { habitacion_id } = req.params; // Cambio de "id" a "habitacion_id"
    const habitacion = await habitacionModel.obtenerHabitacionById(habitacion_id);
    if (!habitacion) {
      return res.status(404).json({ message: "Habitación no encontrada" });
    }
    res.json(habitacion);
  } catch (error) {
    next(error);
  }
};

export const createHabitacion = async (req, res, next) => {
  try {
    const nuevaHabitacion = await habitacionModel.agregarHabitacion(req.body);
    res.status(201).json(nuevaHabitacion);
  } catch (error) {
    next(error);
  }
};

export const updateHabitacion = async (req, res, next) => {
  try {
    const { habitacion_id } = req.params; // Cambio de "id" a "habitacion_id"
    const habitacionActualizada = await habitacionModel.actualizarHabitacion(habitacion_id, req.body);
    res.json(habitacionActualizada);
  } catch (error) {
    next(error);
  }
};

export const deleteHabitacion = async (req, res, next) => {
  try {
    const { habitacion_id } = req.params; // Cambio de "id" a "habitacion_id"
    await habitacionModel.eliminarHabitacion(habitacion_id);
    res.json({ message: "Habitación eliminada correctamente" });
  } catch (error) {
    next(error);
  }
};
