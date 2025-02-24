import supabase from "../config/supabaseClient.js"

export async function obtenerHabitaciones() {
  const { data, error } = await supabase.from("habitaciones").select("*")
  if (error) throw error
  return data
}

export async function obtenerHabitacionById(id) {
  const { data, error } = await supabase.from("habitaciones").select("*").eq("habitacion_id", id).single()
  if (error) throw error
  return data
}

export async function agregarHabitacion(habitacion) {
  const { data, error } = await supabase.from("habitaciones").insert([habitacion])
  if (error) throw error
  return data
}

export async function actualizarHabitacion(id, habitacion) {
  const { data, error } = await supabase.from("habitaciones").update(habitacion).eq("habitacion_id", id)
  if (error) throw error
  return data
}

export async function eliminarHabitacion(id) {
  const { data, error } = await supabase.from("habitaciones").delete().eq("habitacion_id", id)
  if (error) throw error
  return data
}

