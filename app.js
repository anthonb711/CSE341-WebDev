const express = require('express'); // Must require a module to use it. Here we require the express module
const app = express (); // app creates an instance of the express module and acts as a sudo-namespace

app.get('/', (req, res) => { // This uses the express method 'get()' and we use '/' to create a homepage. Then a callback to define what happens. This case
                             // We are using res which is a response with a closure to send the text as the response. 
  res.send("Hello");
});

app.get('/home', (req, res) => {
res.send("Hello World, This is Home router");
});
app.get('/profile', (req, res) => {
res.send("Hello World, This is profile router");
});
app.get('/login', (req, res) => {
res.send("Hello World, This is login router");
});

app.get('/logout', (req, res) => {
res.send("Hello World, This is logout router, change lives");
});

app.listen(process.env.PORT || 3000, () => {  //Create a port using the listen method in the app (express module)
  console.log('Web Server is listneing at port ' + (process.env.PORT || 3000)); // The Node.js app will now be set to port 3000 of local host. 
                                                                                // Paste http://localhost:3000 into your browse to see the output of the app
});