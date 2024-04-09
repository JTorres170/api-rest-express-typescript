import express from 'express';
import { LoansController } from '../controllers/loansController'

const router = express.Router();
router.use(express.json());

const loansController = new LoansController

router.get('/loans', loansController.getLoans)
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
 *                   fecha_entrega:
 *                      type: string
 *                   estado_prestamo:
 *                      type: boolean
 */

router.get('/loans-returned', loansController.getLoansReturned)
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

router.get('/loans-not-returned', loansController.getLoansNotReturned)
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

router.patch('/set-returned', loansController.setLoanReturned)
/**
 * @swagger
 * /loans/set-returned:
 *   patch:
 *     summary: Modifica el estado del prestamo indicado como devuelto
 *     description: Modifica los datos de un prestamo en el jdoc
 *     tags:
 *      - Loans
 *     parameters:
 *       - in: query
 *         name: id
 *         description: ID del préstamo a modificar.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Prestamo modificado con éxito.
 *       '404':
 *         description: No se encontró el prestamo con el ID proporcionado.
 */

router.patch('/set-end-date', loansController.setLoanEndDate)
/**
 * @swagger
 * /loans/set-end-date:
 *   patch:
 *     summary: Modifica la fecha final del prestamo
 *     description: Modifica los datos de un prestamo en el jdoc
 *     tags:
 *      - Loans
 *     parameters:
 *       - in: query
 *         name: id
 *         description: ID del préstamo a modificar.
 *         required: true
 *         schema:
 *           type: integer
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

router.get('/loans-by-user', loansController.getLoansByUser)
/**
 * @swagger
 * /loans/loans-by-user:
 *   get:
 *     summary: Devuelve todos los prestamos de un usuario
 *     description: Lee el archivo json de los prestamos e imprime prestamos de un usuario
 *     tags:
 *      - Loans
 *     parameters:
 *       - in: query
 *         name: id_usuario
 *         description: ID del usuario al cual accedemos.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Éxito, devuelve una lista de prestamos del usuario.
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

router.post("/add-loan", loansController.addLoan)
/**
 * @swagger
 * /loans/add-loan:
 *   post:
 *     summary: Guarda un nuevo prestamo
 *     description: Añade un prestamo al archivo json que almacena estos
 *     tags:
 *      - Loans
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_libro:
 *                 type: integer
 *               id_usuario:
 *                 type: integer
 *               fecha_inicio:
 *                 type: string
 *               fecha_fin:
 *                 type: string
 *               fecha_entrega:
 *                 type: string
 *               estado_prestamo:
 *                 type: boolean
 *     responses:
 *       '200':
 *         description: Prestamo añadido con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 id_usuario:
 *                   type: integer
 *                 fecha_inicio:
 *                   type: string
 *                 fecha_fin:
 *                   type: string
 *                 fecha_entrega:
 *                   type: string
 *                 estado_prestamo:
 *                   type: boolean
 */

// Linea importante
export default router