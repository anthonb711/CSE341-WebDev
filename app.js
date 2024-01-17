const dotenv = require("dotenv");
dotenv.config();
const express = require('express'); // Must require a module to use it. Here we require the express module
const app = express (); // app creates an instance of the express module and acts as a sudo-namespace
const indexRoutes = require('./routes/index.js');
const {MongoClient} = require ('mongodb');


async function main() {
  const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cse341-contacts.2j9r783.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient (uri);

console.log(uri);
  try {
    await client.connect();

    await createComment(client, {
      name: "Matthew Hoover",
      email: "mhoover@gec.com",
      movie_id: "Fight Club",
      text: "THIS WAS AWESOME!"
    })

    await findCommentByName(client, "Matthew Hoover");

  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
main().catch(console.error);

async function createComment (client, newComment) {
  const result = await client.db("sample_mflix").collection("comments").insertOne(newComment);
  console.log(`New Comment ${result.insertedId}`);
}
async function findCommentByName (client, commenterName) {
  const result = await client.db("sample_mflix").collection("comments").findOne({name: commenterName});
  if (result) {
    console.log(`found a result for :${commenterName}`);
    console.log(result);
  } else {
    console.log("No result found");
  }

}

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