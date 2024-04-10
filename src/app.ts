import express, { Request, Response } from 'express';
import path from 'path'

import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './swagger';

import books from "./router/books"
import users from "./router/users"
import loans from "./router/loans"

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join('public')));

// Get default
app.get('/', (_req: Request, res: Response) => {
  res.send(path.join('index.html'));
  console.log('Prueba correcta!')
});

// Implement routers
app.use("/books", books)
app.use("/users", users)
app.use("/loans", loans)

// Implement swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// Listener
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
