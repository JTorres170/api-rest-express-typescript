import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import path from 'path'

import swaggerDocs from './utils/swagger';
//import { verifyToken } from './middlewares/authorizer';
import logger from './utils/logger';

import books from "./router/books"
import users from "./router/users"
import loans from "./router/loans"
import auth from "./router/auth"

// Basic variables
const app = express();
const PORT = 3000;

// Implement middlewares
app.use(express.json());
app.use(express.static(path.join('public')));
app.use(cookieParser())

// Implement verifier
//app.use(verifyToken)

// Implement routers
app.use("/books", books)
app.use("/users", users)
app.use("/loans", loans)
app.use("/auth", auth)

// Get default
app.get('/', (_req: Request, res: Response) => {
  res.send(path.join('index.html'));
});

// Listener
app.listen(PORT, () => {
  logger.info(`App is running at http://localhost:${PORT}`);
  
  // Implement swagger
  swaggerDocs(app, PORT)
});
