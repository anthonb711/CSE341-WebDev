const express = require('express'); // Must require a module to use it. Here we require the express module
const app = express (); // app creates an instance of the express module and acts as a sudo-namespace
const indexRoutes = require('./routes/index.js');
const {MongoClient} = require ('mongodb');

async function main() {
  const uri = "mongodb+srv://<username>:<password>@cse341-contacts.2j9r783.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient (uri);
  try {
    await client.connect();

    await listDatabases(client);

  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
main().catch(console.error);

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => {
    console.log(`- ${db.name}`);
  });
}

app.use('/', indexRoutes);

app.listen(process.env.PORT || 3000, () => {  //Create a port using the listen method in the app (express module)
  console.log('Web Server is listneing at port ' + (process.env.PORT || 3000)); // The Node.js app will now be set to port 3000 of local host. 
                                                                                // Paste http://localhost:3000 into your browse to see the output of the app
});