// Dependencies
const dotenv = require("dotenv");
dotenv.config();
const express = require('express'); 
const app = express (); 
const port = process.env.PORT || 3000;
const {MongoClient} = require ('mongodb');

//MAIN
async function main() {
  const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cse341-contacts.2j9r783.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient (uri);
  try {
    await client.connect   ();
    
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

/**************************************************************************************************/
// App Router
app.use('/', require('./routes'));

app.listen(port, () => {  
  console.log(`Web Server is listneing at port  + ${port}`); 
});