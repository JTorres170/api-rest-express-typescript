// BOOKS
export interface BookEntry {
    id: number,
    titulo: string,
    autor: string
}
export type newBookEntry = Omit<BookEntry, "id">

// USERS
export interface UserEntry {
    id: number,
    username: string,
    password: string,
    fecha_registro: string
}
export type newUserEntry = Omit<UserEntry, "id">

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