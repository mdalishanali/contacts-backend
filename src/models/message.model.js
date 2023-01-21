const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const messageSchema = new mongoose.Schema(
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
const message = mongoose.model("message", messageSchema);
module.exports = message;
