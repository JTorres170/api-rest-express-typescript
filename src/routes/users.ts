import express from 'express';
import { UsersController } from '../controllers/usersController'

const routes = express.Router();
routes.use(express.json());

const usersController = new UsersController

routes.get('/users', usersController.getUsers)
/**
 * @swagger
 * /users/users:
 *   get:
 *     summary: Devuelve todos los usuarios guardados
 *     description: Lee el archivo json de los usuarios e imprime los datos de estos
 *     tags:
 *      - Users
 *     responses:
 *       '200':
 *         description: Éxito, devuelve una lista de usuarios.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   nombre:
 *                     type: string
 *                   apellido:
 *                     type: string
 *                   fecha_registro:
 *                      type: string
 */

routes.post('/add-user', usersController.addUser)
/**
 * @swagger
 * /users/add-user:
 *   post:
 *     summary: Guarda un nuevo usuario
 *     description: Añade un usuario al archivo json que almacena estos
 *     tags:
 *      - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               apellido:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Usuario añadido con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nombre:
 *                   type: string
 *                 apellido:
 *                   type: string
 */

routes.delete('/remove-user/:id', usersController.removeUser)
/**
 * @swagger
 * /users/remove-user:
 *   delete:
 *     summary: Elimina un usuario
 *     description: Elimina un usuario del json en base a la id recibida
 *     tags:
 *      - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *     responses:
 *       '200':
 *         description: Usuario eliminado con éxito.
 *       '404':
 *         description: No se encontró el usuario con el ID proporcionado.
 */

routes.put('/update-user/:id', usersController.updateUser)
/**
 * @swagger
 * /users/update-user:
 *   post:
 *     summary: Modifica los datos de un usuario
 *     description: Modifica los datos de un usuario en el jdoc
 *     tags:
 *      - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               apellido:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Usuario modificado con éxito.
 *       '404':
 *         description: No se encontró el usuario con el ID proporcionado.
 */

// Linea importante
export default routes