const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const contactSchema = new mongoose.Schema(
  {
    otp: {
      type: Number,
      length: 6,
      required: true,
    },
    userId: {
      type: ObjectId,
      ref: "contacts",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const contact = mongoose.model("contacts", contactSchema);
module.exports = contact;
