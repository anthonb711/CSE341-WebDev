const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'CONTACTS API',
    description: 'Description'
  },
  host: 'agbwebdev.onrender.com'
};

const outputFile = './swagger-output.json';
const routes = ['./routes/index.js'];

swaggerAutogen(outputFile, routes, doc);