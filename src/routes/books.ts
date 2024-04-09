import express from 'express';
import { BooksController } from '../controllers/booksController'

const routes = express.Router();
routes.use(express.json());

const booksController = new BooksController

routes.get('/books', booksController.getBooks)
/**
 * @swagger
 * /books/books:
 *   get:
 *     summary: Devuelve todos los libros guardados
 *     description: Lee el archivo json de los libros e imprime los datos de estos
 *     tags:
 *      - Books
 *     responses:
 *       '200':
 *         description: Éxito, devuelve una lista de libros.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   titulo:
 *                     type: string
 *                   autor:
 *                     type: string
 */

routes.post('/add-book', booksController.addBook)
/**
 * @swagger
 * /books/add-book:
 *   post:
 *     summary: Guarda un nuevo libro
 *     description: Añade un libro al archivo json que almacena estos
 *     tags:
 *      - Books
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               autor:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Libro añadido con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 titulo:
 *                   type: string
 *                 autor:
 *                   type: string
 */

routes.delete('/remove-book/:id', booksController.removeBook)
/**
 * @swagger
 * /books/remove-book:
 *   delete:
 *     summary: Elimina un libro
 *     description: Elimina un libro del json en base a la id recibida
 *     tags:
 *      - Books
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *     responses:
 *       '200':
 *         description: Libro eliminado con éxito.
 *       '404':
 *         description: No se encontró el libro con el ID proporcionado.
 */

routes.put('/update-book/:id', booksController.updateBook)
/**
 * @swagger
 * /books/update-book:
 *   post:
 *     summary: Modifica los datos de un libro
 *     description: Modifica los datos de un libro en el jdoc
 *     tags:
 *      - Books
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               autor:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Libro modificado con éxito.
 *       '404':
 *         description: No se encontró el libro con el ID proporcionado.
 */

// Linea importante
export default routes