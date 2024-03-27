import { UserEntry, newUserEntry } from "../types/types";
import { Request, Response } from 'express';

import userData from '../dataAccess/users.json'

const users: UserEntry[] = userData as UserEntry[]

export class UsersController {
    constructor() {}

    getUsers(_req: Request, res: Response) {
        if (users) {
            res.status(200).json(users)
        } else {
            res.status(404).json({mensaje:'No se encontró el libro con el ID proporcionado'});
        }
    }

    addUser = (req: Request, res: Response) => {
        // Declarar los datos para el nuevo usuario
        const {nombre, apellido, fecha_registro} = req.body
        const newUserEntry: newUserEntry = {
            nombre,
            apellido,
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

    removeUser = (req: Request, res: Response) => {
        const removeID = req.body.id;
        const idUsers = users.map(user => user.id);
        const id = idUsers.indexOf(removeID);

        if (id !== -1) {
            users.splice(id, 1);
            res.status(200).json({mensaje:'Usuario eliminado con exito'});
        } else {
            res.status(404).json({mensaje:'No se encontró el usuario con el ID proporcionado'});
        }
    }

    updateUser = (req: Request, res: Response) => {
        const updateID = req.body.id;
        const updateData = req.body;
        const idUsers = users.map(user => user.id);
        const id = idUsers.indexOf(updateID);

        if (id !== -1) {
            users[id] = {...users[id],...updateData};
            res.status(200).json({mensaje:'Usuario modificado con exito.'});
        } else {
            res.status(404).json({mensaje:'No se encontró el usuario con el ID proporcionado.'});
        }
    }
}