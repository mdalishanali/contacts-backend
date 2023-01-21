const express = require("express");
const {
  createContact,
  getAllContact,
  getOneContact,
  deleteContact,
  findAndUpdate,
} = require("../controllers/contact.controller");
const router = express.Router();

router.post("/", createContact);
router.get("/", getAllContact);
router.get("/:id", getOneContact);
router.delete("/:id", deleteContact);
router.put("/:id", findAndUpdate);

module.exports = router;
