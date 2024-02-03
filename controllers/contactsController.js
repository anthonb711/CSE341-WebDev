const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

/*
    GET ALL CONTACTS && GET CONTACT BY ID
*/
const getContacts = async (req, res) => {
  const cursor = await mongodb.getDb().db('cse341_proj1').collection('contacts').find();
  const allContacts = await cursor.toArray();
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(allContacts);
};

const getContact = async (req, res) => {
  const contactID = new ObjectId(req.params.id);
  const contact = await mongodb
    .getDb()
    .db('cse341_proj1')
    .collection('contacts')
    .findOne(contactID);
  console.log(contact);
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(contact);
};

/*
    POST/CREATE NEW CONTACT
*/
const createContact = async (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const insertedContact = await mongodb
    .getDb()
    .db('cse341_proj1')
    .collection('contacts')
    .insertOne(contact);
  res.status(201).json(insertedContact);
};

/*
    PUT/UPDATE CONTACT BY ID
*/
const updateContact = async (req, res) => {
  const docID = await new ObjectId(req.params.id);
  const theUpdate = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  await mongodb
    .getDb()
    .db('cse341_proj1')
    .collection('contacts')
    .replaceOne({ _id: docID }, theUpdate);
  res.status(204).send('contact updated');
};

/*
    DELETE CONTACT BY ID
*/
const deleteContact = async (req, res) => {
  const docID = await new ObjectId(req.params.id);
  await mongodb.getDb().db('cse341_proj1').collection('contacts').deleteOne({ _id: docID });
  res.status(200).send('contact deleted');
};

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact
};
