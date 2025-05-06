// swagger.js
import {Options} from 'swagger-jsdoc';

const swaggerOptions:Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Task Manager API',
      version: '1.0.0',
      description: 'Simple Task Manager API documentation',
    },
    servers: [
      {
        url: 'http://localhost:3000'
      },
    ],
  },
  apis: ['./routes/*.ts']
};
export default swaggerOptions
