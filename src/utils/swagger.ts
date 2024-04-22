import { Express } from 'express';

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
// import swaggerAutogen from 'swagger-autogen';

import { version } from "../../package.json"
import logger from '../utils/logger'

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Rest Library Documentation',
            version,
        },
        components: {
            securitySchemas: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: ['./src/router/*.ts'],
}

const swaggerSpec = swaggerJSDoc(options)

function swaggerDocs(app: Express, port: number) {
    // Swagger page
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
    
    // Docs in JSON format
    app.get('/docs.json', (_req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.send(swaggerSpec)
    })
    
    logger.info(`Docs available at http://localhost:${port}/docs`)
}

// Swagger-autogen
// swaggerAutogen()('./swagger.json', ['./src/router/*.ts'], options).then (async () => {
//     await import('../app')
// })

export default swaggerDocs