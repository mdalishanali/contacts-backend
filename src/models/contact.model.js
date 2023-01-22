const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      first: {
        type: String,
        required: true,
      },
      last: {
        type: String,
        required: true,
      },
    },
    phoneNumber: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
);

contactSchema.virtual("fullName").get(function () {
  return `${this.name.first} ${this.name.last}`;
});

const contact = mongoose.model("contacts", contactSchema);
module.exports = contact;
