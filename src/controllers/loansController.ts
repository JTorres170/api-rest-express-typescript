import { LoanEntry, /*newLoanEntry*/ } from "../types/types";
import { Request, Response } from 'express';

import loanData from '../dataAccess/loans.json'

const loans: LoanEntry[] = loanData as LoanEntry[]

export class LoansController {
    constructor() {}

    getLoans(_req: Request, res: Response) {
        if (loans) {
            res.status(200).json(loans)
        } else {
            res.status(404).json({mensaje:'No se encontró el prestamo con el ID proporcionado'});
        }
    }

    getLoansReturned(_req: Request, res: Response) {
        const loansReturned = loans.filter(loan => loan.estado_prestamo === true)

        res.status(200).json(loansReturned)
    }

    getLoansNotReturned(_req: Request, res: Response) {
        const loansReturned = loans.filter(loan => loan.estado_prestamo === false)

        res.status(200).json(loansReturned)
    }

    setLoanReturned(req: Request, res: Response) {
        const loanID = parseInt(req.params.id);
        const loanReturnDate = req.body.fecha_entrega;
        const idLoans = loans.map(loan => loan.id);
        const id = idLoans.indexOf(loanID);

        if (id !== -1) {
            loans[id].estado_prestamo = true;
            loans[id].fecha_entrega = loanReturnDate;
            res.status(200).json({mensaje:'Prestamo modificado con exito.'});
        } else {
            res.status(404).json({mensaje:'No se encontró el prestamo con el ID proporcionado.'});
        }
    }

    setLoanEndDate(req: Request, res: Response) {
        const loanID = parseInt(req.params.id);
        const loanEndDate = req.body.fecha_fin;
        const idLoans = loans.map(loan => loan.id);
        const id = idLoans.indexOf(loanID);

        if (id !== -1) {
            loans[id].fecha_fin = loanEndDate;
            res.status(200).json({mensaje:'Prestamo modificado con exito.'});
        } else {
            res.status(404).json({mensaje:'No se encontró el prestamo con el ID proporcionado.'});
        }
    }
}