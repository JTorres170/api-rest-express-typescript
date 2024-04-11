// USERS
export interface UserEntry {
    id: number,
    username: string,
    password: string,
    fecha_registro: string
}
export type newUserEntry = Omit<UserEntry, "id">