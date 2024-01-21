const {MongoClient, ObjectId} = require ('mongodb');



const getContacts = async (req, res) => {
  const client = new MongoClient (process.env.MONGODB_URI);
  try {
    await client.connect();
    const cursor = await client.db("cse341_proj1").collection('contacts').find();
    const allContacts = await cursor.toArray();
    res.send(allContacts);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
};

const getContact = async (req, res) => {
  const client = new MongoClient (process.env.MONGODB_URI);
  const contactID = new ObjectId(req.params.id);

  try {
    await client.connect();
    const contact  = await client.db("cse341_proj1").collection('contacts').findOne(contactID);
    console.log(contact);
    res.send(contact);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
};





/*const getContacts = (req, res) => {
  res.send('hello from Contacts')
  //res.send(allContacts);
};
*/
module.exports = { getContacts, getContact };
