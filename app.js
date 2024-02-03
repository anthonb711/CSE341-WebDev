const express    = require('express'              );
const cors       = require('cors'                 );
const mongodb    = require('./db/connect'         );
const app        = express(                       );
const swaggerUI  = require('swagger-ui-express'   );
const swaggerDoc = require('./swagger-output.json');

const port       = process.env.PORT || 3000;



//Middleware
app
.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))
.use(cors())
.use(express.json())
.use(express.urlencoded({ extended: true}))
.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
})
.use('/', require('./routes'));


// Connect to DB
mongodb.initDb ((err, mongodb) => {
  if(err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log('Connected to MongoDB');
    console.log(`Web Server is listneing at port  + ${port}`);
  }
});
