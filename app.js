const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/', require('./routes'));

mongodb.initDb ((err, mongodb) => {
  if(err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Web Server is listneing at port  + ${port}`);
  }
});
