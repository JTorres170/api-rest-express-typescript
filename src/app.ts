import express, { Request, Response } from 'express';

import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './swagger';

import books from "./routes/books"
import users from "./routes/users"
import loans from "./routes/loans"

const app = express();
const PORT = 3000;
app.use(express.json());

// Get predeterminado
app.get('/', (_req: Request, res: Response) => {
  res.send('¡Hola, mundo!');
  console.log('Prueba correcta!')
});

// Implementar routes
app.use("/books", books)
app.use("/users", users)
app.use("/loans", loans)

// Implementar swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// Listener
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
