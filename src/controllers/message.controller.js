const Message = require("../models/message.model");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

const createMessage = async (req, res) => {
  try {
    const data = req.body;
    const { userId, otp, phoneNumber } = data;
    const sendMessage = await client.messages
      .create({
        body: `Hey! Your otp is ${otp}`,
        from: "+18023476980",
        to: phoneNumber,
      })
      .then((message) => message.sid);
    const createData = {
      otp,
      userId: userId,
    };
    const messageResponse = await Message.create(createData);
    res.send(messageResponse).status(400);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAllMessages = async (req, res) => {
  try {
    const page = req.query.page;
    const size = req.query.pageSize;

    const messages = await Message.find()
      .sort({ createdAt: -1 })
      .populate({ path: "userId", select: "name" })
      .skip((page - 1) * size)
      .limit(size)
      .lean()
      .exec();

    const totalPages = Math.ceil((await Message.countDocuments()) / size) || 1;
    const counts = await Message.countDocuments();
    return res.send({ messages, totalPages, counts });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

module.exports = {
  createMessage,
  getAllMessages,
};
