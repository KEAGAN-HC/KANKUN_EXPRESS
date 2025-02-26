import * as habitacionModel from "../models/habitacionModel.js";

export const getAllHabitaciones = async (req, res, next) => {
  try {
    const habitaciones = await habitacionModel.obtenerHabitaciones();
    if (habitaciones.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No hay habitaciones disponibles.",
      });
    }
    res.json({
      success: true,
      message: "Lista de habitaciones obtenida correctamente.",
      data: habitaciones,
    });
  } catch (error) {
    next({
      status: 500,
      message: "Error al obtener la lista de habitaciones.",
    });
  }
};

export const getHabitacionById = async (req, res, next) => {
  try {
    const { habitacion_id } = req.params; // ✅ Aseguramos que se extraiga correctamente

    if (!habitacion_id) {
      return res.status(400).json({ success: false, message: "El ID de la habitación es requerido." });
    }

    const habitacion = await habitacionModel.obtenerHabitacionById(habitacion_id);
    
    if (!habitacion) {
      return res.status(404).json({
        success: false,
        message: `No se encontró la habitación con ID ${habitacion_id}.`,
      });
    }

    res.json({
      success: true,
      message: `Habitación con ID ${habitacion_id} obtenida correctamente.`,
      data: habitacion,
    });
  } catch (error) {
    next({
      status: 500,
      message: `Error al buscar la habitación: ${error.message}`,
    });
  }
};


export const createHabitacion = async (req, res, next) => {
  try {
    const nuevaHabitacion = await habitacionModel.agregarHabitacion(req.body);
    res.status(201).json({
      success: true,
      message: "Habitación creada correctamente.",
      data: nuevaHabitacion,
    });
  } catch (error) {
    next({
      status: 500,
      message: "Error al crear la habitación. Verifica los datos enviados.",
    });
  }
};

export const updateHabitacion = async (req, res, next) => {
  try {
    const { habitacion_id } = req.params; 
    const habitacionActualizada = await habitacionModel.actualizarHabitacion(habitacion_id, req.body);
    res.json({
      success: true,
      message: `Habitación con ID ${habitacion_id} actualizada correctamente.`,
      data: habitacionActualizada,
    });

  } catch (error) {
    next(error);
  }
};


export const deleteHabitacion = async (req, res, next) => {
  try {
    const { habitacion_id } = req.params; 
    await habitacionModel.eliminarHabitacion(habitacion_id);
    res.json({ message: "Habitación eliminada correctamente" });
  } catch (error) {
    next(error);
  }
};