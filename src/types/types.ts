export interface BookEntry {
    id: number,
    titulo: string,
    autor: string
}
export type newBookEntry = Omit<BookEntry, "id">

export interface UserEntry {
    id: number,
    nombre: string,
    apellido: string,
    fecha_registro: string
}
export type newUserEntry = Omit<UserEntry, "id">

export interface LoanEntry {
    id: number,
    id_libro: number,
    id_usuario: number,
    fecha_inicio: string,
    fecha_fin: string,
    estado_prestamo: boolean
}
export type newLoanEntry = Omit<LoanEntry, "id">