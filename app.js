const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
const app = express();
const port = process.env.PORT || 3000;

const swaggerUI = require('swagger-ui-express');
const swaggerDoc = require('./swagger-output.json');




app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
app.use('/', require('./routes'));

mongodb.initDb ((err, mongodb) => {
  if(err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Web Server is listneing at port  + ${port}`);
  }
});
