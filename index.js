const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
//require cors
const cors = require("cors");
const app = express();
const port = 3000;

// connect to mongodb
//mongoose.connect("mongodb://127.0.0.1:27017/messagesApi");
mongoose.connect(process.env.MONGODB);

//console log .env MONGODB
console.log(process.env.MONGODB);

// check if connection works
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

// import routes
const messagesRouter = require("./routes/api/v1/messages");
app.use(express.json());

// use cors
app.use(cors());

// use routes
app.use("/api/v1/messages", messagesRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

