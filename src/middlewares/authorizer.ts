import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'

import {} from '../types/types'

const secretKey = "ultrasecretpassword1234_-*/"

// Function that verify the token generated at the login method
export function verifyToken(req: Request, res: Response, next: NextFunction) {
    // const header = req.header("Authorization") || "";
    // const token = header.split(" ")[1];
    const token = req.cookies.token || ""

    try {
        if (req.originalUrl != '/users/login') {
            if (!token) {
                return res.status(401).json({ message: "Token not provied" });
            }
            
            const payload = jwt.verify(token, secretKey) as { username: string };
            req.username = payload.username;
            console.log("Usuario logueado: ", req.username)
        }
        next();
        return;
    } catch (error) {
        return res.status(403).json({ message: "Token not valid " });
    } 
}