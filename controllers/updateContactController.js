const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const updateContact = async (req, res) => {
    const docID = await new ObjectId(req.params.id);
    
    const theUpdate = {
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    fav_color: req.body.fav_color,
    dob: req.body.dob
  };
  const updatedContact = await mongodb.getDb().db("cse341_proj1").collection('contacts').replaceOne({_id: docID }, theUpdate);
  res.status(204).send('contact updated');


};

module.exports = { updateContact };