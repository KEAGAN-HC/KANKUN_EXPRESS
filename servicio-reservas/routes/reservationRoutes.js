import express from "express";
import {
  getAllReservations,
  getReservationById,
  createReservation,
  updateReservation,
  deleteReservation,
} from "../controllers/reservationController.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Reserva:
 *       type: object
 *       required:
 *         - usuario_id
 *         - habitacion_id
 *         - fecha_entrada
 *         - fecha_salida
 *         - estado
 *       properties:
 *         reserva_id:
 *           type: integer
 *           description: ID único de la reserva
 *         usuario_id:
 *           type: integer
 *           description: ID del usuario que hizo la reserva
 *         habitacion_id:
 *           type: integer
 *           description: ID de la habitación reservada
 *         fecha_entrada:
 *           type: string
 *           format: date
 *           description: Fecha de entrada
 *         fecha_salida:
 *           type: string
 *           format: date
 *           description: Fecha de salida
 *         estado:
 *           type: string
 *           enum: [Confirmada, Cancelada, Pendiente]
 *           description: Estado de la reserva
 */

/**
 * @swagger
 * /api/reservas:
 *   get:
 *     summary: Obtener todas las reservas
 *     responses:
 *       200:
 *         description: Lista de reservas obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reserva'
 */
router.get("/", getAllReservations);

/**
 * @swagger
 * /api/reservas/{reserva_id}:
 *   get:
 *     summary: Obtener una reserva por ID
 *     parameters:
 *       - in: path
 *         name: reserva_id
 *         required: true
 *         description: ID de la reserva
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Reserva encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reserva'
 *       404:
 *         description: Reserva no encontrada
 */
router.get("/:reserva_id", getReservationById);

/**
 * @swagger
 * /api/reservas:
 *   post:
 *     summary: Crear una nueva reserva
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reserva'
 *     responses:
 *       201:
 *         description: Reserva creada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reserva'
 */
router.post("/", createReservation);

/**
 * @swagger
 * /api/reservas/{reserva_id}:
 *   put:
 *     summary: Actualizar una reserva
 *     parameters:
 *       - in: path
 *         name: reserva_id
 *         required: true
 *         description: ID de la reserva
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reserva'
 *     responses:
 *       200:
 *         description: Reserva actualizada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reserva'
 */
router.put("/:reserva_id", updateReservation);

/**
 * @swagger
 * /api/reservas/{reserva_id}:
 *   delete:
 *     summary: Eliminar una reserva
 *     parameters:
 *       - in: path
 *         name: reserva_id
 *         required: true
 *         description: ID de la reserva
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Reserva eliminada correctamente
 */
router.delete("/:reserva_id", deleteReservation);

export default router;
