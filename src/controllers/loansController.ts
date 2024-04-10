import { LoanEntry, newLoanEntry } from "../types/types";
import { Request, Response } from 'express';

import loanData from '../dataAccess/loans.json'

const loans: LoanEntry[] = loanData as LoanEntry[]

// Class with every function to use
export class LoansController {
    constructor() {}

    // Returns every loan stored
    getLoans(_req: Request, res: Response) {
        if (loans) {
            res.status(200).json(loans)
        } else {
            res.status(404).json({mensaje:'No se encontró el prestamo con el ID proporcionado'});
        }
    }

    // Returns just the loans that are returned
    getLoansReturned(_req: Request, res: Response) {
        const loansReturned = loans.filter(loan => loan.estado_prestamo === true)

        if (loansReturned) {
            res.status(200).json(loansReturned)
        } else {
            res.status(404).json({mensaje: 'No se encontro ningun prestamo devuelto'})
        }
    }

    // Return just the loans that are not returned
    getLoansNotReturned(_req: Request, res: Response) {
        const loansReturned = loans.filter(loan => loan.estado_prestamo === false)

        if (loansReturned) {
            res.status(200).json(loansReturned)
        } else {
            res.status(404).json({mensaje: 'No se encontro ningun prestamo sin devuelver'})
        }
    }

    // Set the loans from no returned to returned. It also request the data of return
    // and set it as well
    setLoanReturned(req: Request, res: Response) {
        const loanID = req.query.id as string;
        const loanReturnDate = req.body.fecha_entrega;
        
        const idLoans = loans.map(loan => loan.id);
        const id = idLoans.indexOf(parseInt(loanID));

        if (id !== -1 && loans[id].estado_prestamo == false) {
            loans[id].estado_prestamo = true;
            loans[id].fecha_entrega = loanReturnDate;
            res.status(200).json({mensaje:'Prestamo modificado con exito.'});
        } else {
            res.status(404).json({mensaje:
                'No se encontró el prestamo con el ID proporcionado o este ya estaba devuelto'});
        }
    }

    // Update the end date, to increase the time of the loan
    setLoanEndDate(req: Request, res: Response) {
        const loanID = req.query.id as string;
        const loanEndDate = req.body.fecha_fin;
        const idLoans = loans.map(loan => loan.id);
        const id = idLoans.indexOf(parseInt(loanID));

        if (id !== -1 && loanEndDate) {
            loans[id].fecha_fin = loanEndDate;
            res.status(200).json({mensaje:'Prestamo modificado con exito.'});
        } else {
            res.status(404).json({mensaje:'No se encontró el prestamo con el ID proporcionado.'});
        }
    }

    // Return every loan of the user with the id that you want
    getLoansByUser(req: Request, res: Response) {
        const userID = req.query.id_usuario as string
        const loansUser = loans.filter(loan => loan.id_usuario === parseInt(userID))

        if (userID) {
            res.status(200).json(loansUser)
        } else {
            res.status(404).json({mensaje:'No se encontró el usuario con el ID proporcionado.'});
        }
    }

    // Add a new loan with every data requested. The id is updated by itself
    addLoan(req: Request, res: Response) {
        // Declarar los datos para el nuevo prestamo
        const {id_libro, id_usuario, fecha_inicio, fecha_fin, fecha_entrega, estado_prestamo}
        = req.body
        const newLoanEntry: newLoanEntry = {
            id_libro,
            id_usuario,
            fecha_inicio,
            fecha_fin,
            fecha_entrega,
            estado_prestamo
        }
        
        // Encontrar la ID maxima para evitar repeticiones
        let maxId = loanData[loanData.length - 1]

        // Declarar el nuevo prestamo
        const newLoan: LoanEntry = {
            id: maxId.id + 1,
            ...newLoanEntry
        }
    
        loanData.push(newLoan)
        res.status(200).json(newLoan);
    }
}