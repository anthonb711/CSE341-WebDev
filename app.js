const dotenv = require("dotenv");
dotenv.config();
const express = require('express'); 
const bodyParser = require('body-parser');
const app = express (); 
const port = process.env.PORT || 3000;
const {MongoClient} = require ('mongodb');


//Test functions with playground data for mongoDB .env variables
async function main() {
const client = new MongoClient (process.env.MONGODB_URI);
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

//-----------------------------------------------------Router and Listening
app.use(bodyParser.json());
app.use('/', require('./routes'));

app.listen(port, () => {  
  console.log(`Web Server is listneing at port  + ${port}`); 
});