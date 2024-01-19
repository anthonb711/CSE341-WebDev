const dotenv = require("dotenv");
dotenv.config();
const express = require('express'); 
const app = express (); 
const port = process.env.PORT || 3000;
const {MongoClient} = require ('mongodb');

//Test functions with playground data for mongoDB .env variables
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

    await findCommentByName(client, "Mercedes Tyler");

  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}


main().catch(console.error);


//Test functions with playground data for mongoDB .env variables
async function createComment (client, newComment) {
  const result = await client.db("sample_mflix").collection("comments").insertOne(newComment);
  console.log(`New Comment ${result.insertedId}`);
}

async function findCommentByName (client, commenterName) {
  const result = await client.db("sample_mflix").collection("comments").findOne({name: commenterName});
  if (result) {
    console.log(`found a result for : ${commenterName}`);
    console.log(result);
  } else {
    console.log("No result found");
  }
}


// App Router
app.use('/', require('./routes'));

app.listen(port, () => {  
  console.log('Web Server is listneing at port ' + port); 
});