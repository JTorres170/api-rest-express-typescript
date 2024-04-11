// BOOKS
export interface BookEntry {
    id: number,
    titulo: string,
    autor: string
}
export type newBookEntry = Omit<BookEntry, "id">