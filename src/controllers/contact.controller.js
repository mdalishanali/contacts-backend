const Contact = require("../models/contact.model");

const createContact = async (req, res) => {
  try {
    const data = req.body;
    const contactData = await Contact.create(data);
    res.send(contactData).status(400);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAllContact = async (req, res) => {
  try {
    // const page = req.query.page;
    // const size = req.query.pageSize;

    const contacts = await Contact.find().lean().exec();

    // const totalPages = Math.ceil((await Contact.countDocuments()) / size) || 1;
    const counts = await Contact.countDocuments();
    return res.send({ contacts, counts });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const deleteContact = async (req, res) => {
  try {
    const data = req.params.id;
    const contactData = await Contact.findByIdAndDelete(data);
    res.send(contactData).status(400);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOneContact = async (req, res) => {
  try {
    const data = req.params.id;
    const contactData = await Contact.findById(data);
    res.send(contactData).status(400);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const findAndUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;
    const contactData = await Contact.findByIdAndUpdate(id, update, {
      new: true,
    });
    res.send(contactData).status(400);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  createContact,
  getAllContact,
  getOneContact,
  deleteContact,
  findAndUpdate,
};
