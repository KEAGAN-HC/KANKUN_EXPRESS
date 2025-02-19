import * as habitacionModel from "../models/habitacionModel.js"

export const getAllHabitaciones = async (req, res, next) => {
  try {
    const habitaciones = await habitacionModel.obtenerHabitaciones()
    res.json(habitaciones)
  } catch (error) {
    next(error)
  }
}

export const getHabitacionById = async (req, res, next) => {
  try {
    const { id } = req.params
    const habitacion = await habitacionModel.obtenerHabitacionById(id)
    if (!habitacion) {
      return res.status(404).json({ message: "Habitación no encontrada" })
    }
    res.json(habitacion)
  } catch (error) {
    next(error)
  }
}

export const createHabitacion = async (req, res, next) => {
  try {
    const { num_habi, tipo, capacidad, precio, estado } = req.body
    if (!num_habi || !tipo || !precio || !estado) {
      return res.status(400).json({ message: "Faltan campos requeridos" })
    }
    const nuevaHabitacion = await habitacionModel.agregarHabitacion({ num_habi, tipo, capacidad, precio, estado })
    res.status(201).json(nuevaHabitacion)
  } catch (error) {
    next(error)
  }
}

export const updateHabitacion = async (req, res, next) => {
  try {
    const { id } = req.params
    const { num_habi, tipo, capacidad, precio, estado } = req.body
    const habitacionActualizada = await habitacionModel.actualizarHabitacion(id, {
      num_habi,
      tipo,
      capacidad,
      precio,
      estado,
    })
    res.json(habitacionActualizada)
  } catch (error) {
    next(error)
  }
}

export const deleteHabitacion = async (req, res, next) => {
  try {
    const { id } = req.params
    await habitacionModel.eliminarHabitacion(id)
    res.json({ message: "Habitación eliminada correctamente" })
  } catch (error) {
    next(error)
  }
}

