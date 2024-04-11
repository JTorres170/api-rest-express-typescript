// LOANS
export interface LoanEntry {
    id: number,
    id_libro: number,
    id_usuario: number,
    fecha_inicio: string,
    fecha_fin: string,
    fecha_entrega: string,
    estado_prestamo: boolean
}
export type newLoanEntry = Omit<LoanEntry, "id">