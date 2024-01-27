const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const createContact = async (req, res) => {
  const contact = {
    fname: req.body.fname, //req.body.firstName,
    lname: req.body.lname,
    email: req.body.email,
    fav_color: req.body.fav_color,
    dob: req.body.dob
  };
  const insertedContact = await mongodb.getDb().db("cse341_proj1").collection('contacts').insertOne(contact);
  console.log(res.acknowledged);
  res.status(200).json(insertedContact)

};

module.exports = { createContact };