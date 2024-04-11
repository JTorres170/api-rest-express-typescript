import { BookEntry, newBookEntry } from "../types/";
import { Request, Response } from 'express';

import bookData from '../dataAccess/books.json'

const books: BookEntry[] = bookData as BookEntry[]

// Class with every function to use
export class BooksController {
    constructor() {}

    // Return every book stored
    getBooks(_req: Request, res: Response) {
        if (books) {
            res.status(200).json(books)
        } else {
            res.status(404).json({mensaje:'No se encontró el libro con el ID proporcionado'});
        }
    }

    // Add a new book with the data. The id is updated by itself
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

    // Remove the book with the id requested from the storage
    removeBook = (req: Request, res: Response) => {
        const removeID = req.query.id as string;
        const idLibros = books.map(book => book.id);
        const id = idLibros.indexOf(parseInt(removeID));

        if (id !== -1) {
            books.splice(id, 1);
            res.status(200).json({mensaje:'Libro eliminado con exito'});
        } else {
            res.status(404).json({mensaje:'No se encontró el libro con el ID proporcionado'});
        }
    }

    // Change the data that you want to update from the book with the id requested
    updateBook = (req: Request, res: Response) => {
        const updateID = req.query.id as string;
        const updateData = req.body;
        const idLibros = books.map(book => book.id);
        const id = idLibros.indexOf(parseInt(updateID));

        if (id !== -1) {
            books[id] = {...books[id],...updateData};
            res.status(200).json({mensaje:'Libro modificado con exito.'});
        } else {
            res.status(404).json({mensaje:'No se encontró el libro con el ID proporcionado.'});
        }
    }
}