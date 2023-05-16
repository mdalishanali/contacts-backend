require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const connectDb = require("./src/configs/db");
//routes
const cors = require("cors");
const contactRoutes = require("./src/routes/contact.routes");
const messageRoutes = require("./src/routes/message.routes");

app.use(cors());
connectDb();

app.use("/api/contact", contactRoutes);
app.use("/api/message", messageRoutes);

app.get("/", (req,res)=>{
  res.send("<h1>Hello world</h1>")
})
const port = process.env.PORT;
app.listen(port, () => {
  console.log(
    `Listening on Port ${port} and running in ${process.env.NODE_ENV}`
  );
});
