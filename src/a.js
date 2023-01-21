// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid =
  process.env.TWILIO_ACCOUNT_SID || "AC6fb85c71d16156cc60089e469404aa0c";
const authToken = process.env.TWILIO_AUTH_TOKEN||'8c43e9ee8c37a7a211a061e25e478a73';
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "This is the ship that made the Kessel Run in fourteen parsecs?",
    from: "+18023476980",
    to: "+916391417248",
  })
  .then((message) => console.log(message.sid));
