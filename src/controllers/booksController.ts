import { BookEntry, newBookEntry } from "../types/types";
import { Request, Response } from 'express';

import bookData from '../dataAccess/books.json'

const books: BookEntry[] = bookData as BookEntry[]

export class BooksController {
    constructor() {}

    getBooks(_req: Request, res: Response) {
        if (books) {
            res.status(200).json(books)
        } else {
            res.status(404).json({mensaje:'No se encontró el libro con el ID proporcionado'});
        }
    }

    addBook = (req: Request, res: Response) => {
        // Declarar los datos para el nuevo libro
        const {titulo, autor} = req.body
        const newBookEntry: newBookEntry = {
            titulo,
            autor
        }
        
        // Encontrar la ID maxima para evitar repeticiones
        let maxId = bookData[bookData.length - 1]

        // Declarar el nuevo libro
        const newBook: BookEntry = {
            id: maxId.id + 1,
            ...newBookEntry
        }
    
        bookData.push(newBook)
        res.status(200).json(newBook);
    }

    removeBook = (req: Request, res: Response) => {
        const removeID = req.path;
        const idLibros = books.map(book => book.id);
        const id = idLibros.indexOf(Number(removeID));

        if (id !== -1) {
            books.splice(id, 1);
            res.status(200).json({mensaje:'Libro eliminado con exito'});
        } else {
            res.status(404).json({mensaje:'No se encontró el libro con el ID proporcionado'});
        }
    }

    updateBook = (req: Request, res: Response) => {
        const updateID = req.body.id;
        const updateData = req.body;
        const idLibros = books.map(book => book.id);
        const id = idLibros.indexOf(updateID);

        if (id !== -1) {
            books[id] = {...books[id],...updateData};
            res.status(200).json({mensaje:'Libro modificado con exito.'});
        } else {
            res.status(404).json({mensaje:'No se encontró el libro con el ID proporcionado.'});
        }
    }
}