// create a mongoose schema for messages
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MessageSchema = new Schema({
    message: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: false,
    },
    id: {
        type: Number,
        required: true,
    },
});
// export the model to use it in index.js
const Message = mongoose.model("Message", MessageSchema);
module.exports = Message;
