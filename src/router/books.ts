import express from 'express';
import { BooksController } from '../controllers/booksController'

const router = express.Router();
router.use(express.json());

const booksController = new BooksController

router.get('/books', booksController.getBooks)
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

router.post('/add-book', booksController.addBook)
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

router.delete('/remove-book', booksController.removeBook)
/**
 * @swagger
 * /books/remove-book:
 *   delete:
 *     summary: Elimina un libro
 *     description: Elimina un libro del json en base a la id recibida
 *     tags:
 *      - Books
 *     parameters:
 *       - in: query
 *         name: id
 *         description: ID del libro a eliminar.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Libro eliminado con éxito.
 *       '404':
 *         description: No se encontró el libro con el ID proporcionado.
 */

router.put('/update-book', booksController.updateBook)
/**
 * @swagger
 * /books/update-book:
 *   put:
 *     summary: Modifica los datos de un libro
 *     description: Modifica los datos de un libro en el jdoc
 *     tags:
 *      - Books
 *     parameters:
 *       - in: query
 *         name: id
 *         description: ID del libro a modificar.
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
export default router