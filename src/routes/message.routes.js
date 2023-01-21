const express = require("express");
const {
  createMessage,
  getAllMessages,
} = require("../controllers/message.controller");
const router = express.Router();

router.post("/", createMessage);
router.get("/", getAllMessages);
// router.get("/:id", getOneContact);
// router.delete("/:id", deleteContact);
// router.put("/:id", findAndUpdate);

module.exports = router;
