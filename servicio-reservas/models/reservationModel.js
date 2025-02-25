import supabase from "../config/supabaseClient.js";

// Obtener todas las reservas
export const getAllReservations = async () => {
  const { data, error } = await supabase.from("reservas").select("*");
  if (error) throw error;
  return data;
};

// Obtener una reserva por ID
export const getReservationById = async (reserva_id) => {
  const { data, error } = await supabase
    .from("reservas")
    .select("*")
    .eq("reserva_id", reserva_id)
    .single();
  if (error) throw error;
  return data;
};

// Crear una nueva reserva
export const createReservation = async (reservation) => {
  const { data, error } = await supabase
    .from("reservas")
    .insert([
      {
        cliente_id: reservation.cliente_id,  
        habitacion_id: reservation.habitacion_id,
        fecha_entrada: reservation.fecha_entrada,
        fecha_salida: reservation.fecha_salida,
        estado: reservation.estado,
      },
    ])
    .select("*")
    .single();

  if (error) throw error;
  return data;
};

// Actualizar una reserva
export const updateReservation = async (reserva_id, reservation) => {
  const { data, error } = await supabase
    .from("reservas")
    .update(reservation)
    .eq("reserva_id", reserva_id)
    .select("*")
    .single();
  if (error) throw error;
  return data;
};

// Eliminar una reserva
export const deleteReservation = async (reserva_id) => {
  const { data, error } = await supabase
    .from("reservas")
    .delete()
    .eq("reserva_id", reserva_id);
  if (error) throw error;
  return data;
};
