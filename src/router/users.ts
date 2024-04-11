import express from "express";
import { UsersController } from "../controllers/usersController";

const router = express.Router();
router.use(express.json());

const usersController = new UsersController();

router.get("/users", usersController.getUsers);
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
 *                   username:
 *                     type: string
 *                   password:
 *                     type: string
 *                   fecha_registro:
 *                      type: string
 */

router.post("/add-user", usersController.addUser);
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
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               fecha_registro:
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
 *                 username:
 *                   type: string
 *                 password:
 *                   type: string
 *                 fecha_registro:
 *                   type: string
 */

router.delete("/remove-user", usersController.removeUser);
/**
 * @swagger
 * /users/remove-user:
 *   delete:
 *     summary: Elimina un usuario
 *     description: Elimina un usuario del json en base a la id recibida
 *     tags:
 *      - Users
 *     parameters:
 *       - in: query
 *         name: id
 *         description: ID del usuario a eliminar.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Usuario eliminado con éxito.
 *       '404':
 *         description: No se encontró el usuario con el ID proporcionado.
 */

router.put("/update-user", usersController.updateUser);
/**
 * @swagger
 * /users/update-user:
 *   put:
 *     summary: Modifica los datos de un usuario
 *     description: Modifica los datos de un usuario en el jdoc
 *     tags:
 *      - Users
 *     parameters:
 *       - in: query
 *         name: id
 *         description: ID del usuario a modificar.
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
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               fecha_registro:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Usuario modificado con éxito.
 *       '404':
 *         description: No se encontró el usuario con el ID proporcionado.
 */

router.post("/login", usersController.login);
/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Logea en la web
 *     description: Logea en la web y genera un token de autentificacion
 *     tags:
 *      - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Usuario modificado con éxito.
 *       '404':
 *         description: No se encontró el usuario con el ID proporcionado.
 */

router.get("/protected", usersController.protected);
/**
 * @swagger
 * /users/protected:
 *   get:
 *     summary: Verifica el token del usuario
 *     description: Mediante la verificación del token, te hace saber si tienes acceso o no.
 *     tags:
 *      - Users
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         description: Token de autenticación Bearer.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Usuario autenticado con éxito.
 *       '401':
 *         description: No autorizado, el token es inválido o no se proporcionó.
 */

// Linea importante
export default router;