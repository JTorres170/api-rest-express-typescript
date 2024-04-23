import { Request, Response } from 'express';
import jwt from 'jsonwebtoken'

import userData from '../dataAccess/users.json'

const secretKey = "ultrasecretpassword1234_-*/"

export class AuthController {
    constructor() {}

    // Generates and returns a token to prove the user and password provided
    login(req: Request, res: Response) {
        try {
            const username = req.body.username;
            const password = req.body.password;

            if (!username || !password) {
                return res.status(400).json({ message: "Username and password are required" });
            }

            let authenticated = false
            for (let i= 0; i< userData.length; i++) {
                if (userData[i].username === username && userData[i].password === password) {
                    authenticated = true
                    const token = jwt.sign({ username }, secretKey, { expiresIn: "1min" });
                    res.cookie('token', token, {httpOnly: true, expires: new Date(Date.now() + 60000)});

                    return res.status(200).json({ token });
                }
            }
            if (!authenticated) {
                return res.status(401).json({ message: "Authentication failed" });
            }
        } catch (error) {
            return res.status(500).json({ message: "Internal server error" });
        }

        return res.status(500).json({ message: "Unexpected error occurred" });
    };
}