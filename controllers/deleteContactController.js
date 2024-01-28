const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const deleteContact = async (req, res) => {
    const docID = await new ObjectId(req.params.id);
    const updatedContact = await mongodb.getDb().db("cse341_proj1").collection('contacts').deleteOne({_id: docID});
    res.status(200).send('contact deleted');
};

module.exports = { deleteContact };