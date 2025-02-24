import express from "express"
import {
  getAllHabitaciones,
  getHabitacionById,
  createHabitacion,
  updateHabitacion,
  deleteHabitacion,
} from "../controllers/habitacionController.js"

const router = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     Habitacion:
 *       type: object
 *       required:
 *         - num_habi
 *         - tipo
 *         - precio
 *         - estado
 *       properties:
 *         habitacion_id:
 *           type: integer
 *           description: ID auto-generado de la habitación
 *         num_habi:
 *           type: integer
 *           description: Número de la habitación
 *         tipo:
 *           type: string
 *           description: Tipo de habitación
 *         capacidad:
 *           type: integer
 *           description: Capacidad de la habitación
 *         precio:
 *           type: number
 *           description: Precio de la habitación
 *         estado:
 *           type: string
 *           enum: [Disponible, Ocupado, Mantenimiento]
 *           description: Estado de la habitación
 */

/**
 * @swagger
 * /api/habitaciones:
 *   get:
 *     summary: Obtener todas las habitaciones
 *     responses:
 *       200:
 *         description: Lista de habitaciones obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Habitacion'
 */
router.get("/", getAllHabitaciones)

/**
 * @swagger
 * /api/habitaciones/{id}:
 *   get:
 *     summary: Obtener una habitación por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la habitación
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Habitación encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Habitacion'
 *       404:
 *         description: Habitación no encontrada
 */
router.get("/:habitacion_id", getHabitacionById)

/**
 * @swagger
 * /api/habitaciones:
 *   post:
 *     summary: Crear una nueva habitación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Habitacion'
 *     responses:
 *       201:
 *         description: Habitación creada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Habitacion'
 */
router.post("/", createHabitacion)

/**
 * @swagger
 * /api/habitaciones/{id}:
 *   put:
 *     summary: Actualizar una habitación
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la habitación
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Habitacion'
 *     responses:
 *       200:
 *         description: Habitación actualizada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Habitacion'
 */
router.put("/:habitacion_id", updateHabitacion)

/**
 * @swagger
 * /api/habitaciones/{id}:
 *   delete:
 *     summary: Eliminar una habitación
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la habitación
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Habitación eliminada correctamente
 */
router.delete("/:habitacion_id", deleteHabitacion)

export default router

