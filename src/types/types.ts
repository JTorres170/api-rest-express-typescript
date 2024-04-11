// Extends the Request to recognise the variable username
declare global {
    namespace Express {
        interface Request {
            username?: string;
        }
    }
}

export {}