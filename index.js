const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
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

// use routes
app.use("/api/v1/messages", messagesRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Chat</h1>
    <input type="text" id="messages">
    <input type="button" value="chat">
    <script>
    const get = async () => {
    const response = await fetch (https://messages-api-mongo-p0e2.onrender.com);
    const data = await response.json();
    console.log(data);
    }
    </script>
</body>
</html>
*/
