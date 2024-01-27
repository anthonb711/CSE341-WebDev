const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getContacts = async(req, res, next) => {
  const cursor = await mongodb.getDb().db("cse341_proj1").collection('contacts').find();
  const allContacts = await cursor.toArray();
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(allContacts)

};

const getContact = async (req, res) => {
  const contactID = new ObjectId(req.params.id);
  const contact  = await mongodb.getDb().db("cse341_proj1").collection('contacts').findOne(contactID);
  console.log(contact);
 res.setHeader('Content-Type', 'application/json');
  res.status(200).json(contact)
};

module.exports = { getContacts, getContact };
