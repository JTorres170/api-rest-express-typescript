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
}