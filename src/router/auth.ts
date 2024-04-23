import express from "express";

import { AuthController } from "../controllers/authController";

const router = express.Router();
router.use(express.json());

const authController = new AuthController();

router.post("/login", authController.login);
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Logea en la web
 *     description: Logea en la web y genera un token de autentificacion
 *     tags:
 *      - Authorization
 *     security:
 *       - ApiKeyAuth: []
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

export default router