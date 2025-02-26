import express from "express";
import {
  getAllHabitaciones,
  getHabitacionById,
  createHabitacion,
  updateHabitacion,
  deleteHabitacion,
} from "../controllers/habitacionController.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Habitacion:
 *       type: object
 *       required:
 *         - num_habi
 *         - tipo
 *         - capacidad
 *         - precio
 *         - estado
 *       properties:
 *         habitacion_id:
 *           type: integer
 *           description: ID único de la habitación
 *         num_habi:
 *           type: integer
 *           description: Número de la habitación
 *         tipo:
 *           type: string
 *           description: Tipo de habitación
 *         capacidad:
 *           type: integer
 *           description: Número de personas que pueden alojarse
 *         precio:
 *           type: number
 *           format: float
 *           description: Precio de la habitación por noche
 *         estado:
 *           type: string
 *           enum: [Disponible, Ocupado, Mantenimiento]
 *           description: Estado de la habitación
 *       example:
 *         num_habi: 101
 *         tipo: "Doble"
 *         capacidad_camas: 2
 *         precio: 1500.50
 *         estado: "Disponible"
 */

/**
 * @swagger
 * /api/habitaciones:
 *   get:
 *     summary: Obtener todas las habitaciones
 *     tags: [Habitaciones]
 *     responses:
 *       200:
 *         description: Lista de habitaciones obtenida correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Habitacion'
 *       500:
 *         description: Error interno del servidor.
 */
router.get("/", getAllHabitaciones);

/**
 * @swagger
 * /api/habitaciones/{habitacion_id}:
 *   get:
 *     summary: Obtener una habitación por ID
 *     tags: [Habitaciones]
 *     parameters:
 *       - in: path
 *         name: habitacion_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la habitación a buscar
 *     responses:
 *       200:
 *         description: Habitación encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Habitacion'
 *       404:
 *         description: Habitación no encontrada.
 *       500:
 *         description: Error al buscar la habitación.
 */
router.get("/:habitacion_id", getHabitacionById);

/**
 * @swagger
 * /api/habitaciones:
 *   post:
 *     summary: Crear una nueva habitación
 *     tags: [Habitaciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Habitacion'
 *     responses:
 *       201:
 *         description: Habitación creada correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Habitacion'
 *       400:
 *         description: Datos inválidos en la petición.
 *       500:
 *         description: Error interno al crear la habitación.
 */
router.post("/", createHabitacion);

/**
 * @swagger
 * /api/habitaciones/{habitacion_id}:
 *   put:
 *     summary: Actualizar una habitación
 *     tags: [Habitaciones]
 *     parameters:
 *       - in: path
 *         name: habitacion_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la habitación a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Habitacion'
 *     responses:
 *       200:
 *         description: Habitación actualizada correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Habitacion'
 *       400:
 *         description: Datos inválidos en la petición.
 *       404:
 *         description: Habitación no encontrada.
 *       500:
 *         description: Error interno al actualizar la habitación.
 */
router.put("/:habitacion_id", updateHabitacion);

/**
 * @swagger
 * /api/habitaciones/{habitacion_id}:
 *   delete:
 *     summary: Eliminar una habitación
 *     tags: [Habitaciones]
 *     parameters:
 *       - in: path
 *         name: habitacion_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la habitación a eliminar
 *     responses:
 *       200:
 *         description: Habitación eliminada correctamente.
 *       404:
 *         description: Habitación no encontrada.
 *       500:
 *         description: Error interno al eliminar la habitación.
 */
router.delete("/:habitacion_id", deleteHabitacion);

export default router;
