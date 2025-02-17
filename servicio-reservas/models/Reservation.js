import supabase from '../config/supabaseClient.js';

class Reservation {
  static async create(reservationData) {
    const { data, error } = await supabase
      .from('reservas')
      .insert([reservationData])
      .select();

    if (error) throw error;
    return data;
  }

  static async getById(reservationId) {
    const { data, error } = await supabase
      .from('reservas')
      .select('*')
      .eq('reserva_id', reservationId)
      .single();

    if (error) throw error;
    return data;
  }

  static async update(reservationId, updateData) {
    const { data, error } = await supabase
      .from('reservas')
      .update(updateData)
      .eq('reserva_id', reservationId)
      .select();

    if (error) throw error;
    return data;
  }

  static async delete(reservationId) {
    const { error } = await supabase
      .from('reservas')
      .delete()
      .eq('reserva_id', reservationId);

    if (error) throw error;
    return { message: 'Reserva eliminada correctamente' };
  }

  static async checkAvailability(roomId, startDate, endDate) {
    const { data, error } = await supabase
      .from('reservas')
      .select('*')
      .eq('habitacion_id', roomId)
      .gte('fecha_salida', startDate)
      .lte('fecha_entrada', endDate);

    if (error) throw error;
    return data.length === 0; // Devuelve true si la habitación está disponible
  }
}

export default Reservation;