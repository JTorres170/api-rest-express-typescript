import { Request, Response } from 'express';

import { UserEntry, newUserEntry } from "../types/";

// Imports data
import userData from '../dataAccess/users.json'

const users: UserEntry[] = userData as UserEntry[]

// Class with every function to use
export class UsersController {
    constructor() {}

    // Return every user stored
    getUsers(_req: Request, res: Response) {
        if (users) {
            res.status(200).json(users)
        } else {
            res.status(404).json({mensaje:'No se encontró el libro con el ID proporcionado'});
        }
    }

    // Add a new user with the data. The id is updated by itself
    addUser = (req: Request, res: Response) => {
        // Declarar los datos para el nuevo usuario
        const {username, password, fecha_registro} = req.body
        const newUserEntry: newUserEntry = {
            username,
            password,
            fecha_registro
        }
        
        // Encontrar la ID maxima para evitar repeticiones
        let maxId = userData[userData.length - 1]

        // Declarar el nuevo libro
        const newUser: UserEntry = {
            id: maxId.id + 1,
            ...newUserEntry
        }
    
        userData.push(newUser)
        res.status(200).json(newUser);
    }

    // Remove the user with the id requested from the storage
    removeUser = (req: Request, res: Response) => {
        const removeID = req.query.id as string;
        const idUsers = users.map(user => user.id);
        const id = idUsers.indexOf(parseInt(removeID));

        if (id !== -1) {
            users.splice(id, 1);
            res.status(200).json({mensaje:'Usuario eliminado con exito'});
        } else {
            res.status(404).json({mensaje:'No se encontró el usuario con el ID proporcionado'});
        }
    }

    // Change the data that you want to update from the user with the id requested
    updateUser = (req: Request, res: Response) => {
        const updateID = req.query.id as string;
        const updateData = req.body;
        const idUsers = users.map(user => user.id);
        const id = idUsers.indexOf(parseInt(updateID));

        if (id !== -1) {
            users[id] = {...users[id],...updateData};
            res.status(200).json({mensaje:'Usuario modificado con exito.'});
        } else {
            res.status(404).json({mensaje:'No se encontró el usuario con el ID proporcionado.'});
        }
    }
}