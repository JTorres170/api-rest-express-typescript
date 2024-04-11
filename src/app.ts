import express, { Request, Response } from 'express';
import { verifyToken } from './middlewares/authorizer';

import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './swagger';

import cookieParser from 'cookie-parser';
import path from 'path'

import books from "./router/books"
import users from "./router/users"
import loans from "./router/loans"

const app = express();
const PORT = 3000;

// Implement middlewares
app.use(express.json());
app.use(express.static(path.join('public')));
app.use(cookieParser())
app.use(verifyToken)

// Implement routers
app.use("/books", books)
app.use("/users", users)
app.use("/loans", loans)

// Implement swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// Get default
app.get('/', (_req: Request, res: Response) => {
  res.send(path.join('index.html'));
  console.log('Prueba correcta!')
});

// Listener
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
