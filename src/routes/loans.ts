import express from 'express';
import { LoansController } from '../controllers/loansController'

const routes = express.Router();
routes.use(express.json());

const loansController = new LoansController

routes.get('/loans', loansController.getLoans)
/**
 * @swagger
 * /loans/loans:
 *   get:
 *     summary: Devuelve todos los prestamos guardados
 *     description: Lee el archivo json de los prestamos e imprime los datos de estos
 *     tags:
 *      - Loans
 *     responses:
 *       '200':
 *         description: Éxito, devuelve una lista de prestamos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   id_libro:
 *                     type: integer
 *                   id_usuario:
 *                     type: integer
 *                   fecha_inicio:
 *                      type: string
 *                   fecha_fin:
 *                      type: string
 *                   estado_prestamo:
 *                      type: boolean
 */

routes.get('/loans-returned', loansController.getLoansReturned)
/**
 * @swagger
 * /loans/loans-returned:
 *   get:
 *     summary: Devuelve todos los prestamos devueltos
 *     description: Lee el archivo json de los prestamos e imprime los devueltos
 *     tags:
 *      - Loans
 *     responses:
 *       '200':
 *         description: Éxito, devuelve una lista de prestamos devueltos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   id_libro:
 *                     type: integer
 *                   id_usuario:
 *                     type: integer
 *                   fecha_inicio:
 *                      type: string
 *                   fecha_fin:
 *                      type: string
 *                   estado_prestamo:
 *                      type: boolean
 */

routes.get('/loans-not-returned', loansController.getLoansNotReturned)
/**
 * @swagger
 * /loans/loans-not-returned:
 *   get:
 *     summary: Devuelve todos los prestamos no devueltos
 *     description: Lee el archivo json de los prestamos e imprime los no devueltos
 *     tags:
 *      - Loans
 *     responses:
 *       '200':
 *         description: Éxito, devuelve una lista de prestamos no devueltos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   id_libro:
 *                     type: integer
 *                   id_usuario:
 *                     type: integer
 *                   fecha_inicio:
 *                      type: string
 *                   fecha_fin:
 *                      type: string
 *                   estado_prestamo:
 *                      type: boolean
 */

routes.patch('/set-returned/:id', loansController.setLoanReturned)
/**
 * @swagger
 * /loans/set-returned:
 *   post:
 *     summary: Modifica el estado del prestamo indicado como devuelto
 *     description: Modifica los datos de un prestamo en el jdoc
 *     tags:
 *      - Loans
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             items:
 *                 type: object
 *                 properties:
 *                   fecha_entrega:
 *                     type: string
 *     responses:
 *       '200':
 *         description: Prestamo modificado con éxito.
 *       '404':
 *         description: No se encontró el prestamo con el ID proporcionado.
 */

routes.patch('/set-end-date/:id', loansController.setLoanEndDate)
/**
 * @swagger
 * /loans/set-end-date:
 *   post:
 *     summary: Modifica la fecha final del prestamo
 *     description: Modifica los datos de un prestamo en el jdoc
 *     tags:
 *      - Loans
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fecha_fin:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Prestamo modificado con éxito.
 *       '404':
 *         description: No se encontró el prestamo con el ID proporcionado.
 */

// Linea importante
export default routes