

const sendOtp = async (otp, to) => {
  return await client.messages
    .create({
      body: `Hii your otp is ${otp}`,
      from: "+18023476980",
      to: to,
    })
    .then((message) => {
      console.log(message);
    });
};

module.exports = sendOtp;
