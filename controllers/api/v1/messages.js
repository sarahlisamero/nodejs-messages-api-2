// require the Message model
const Message = require("../../../models/Message");

const index = async (req, res) => {
    let messages = await Message.find({});
    res.json({
        status: "success",
        message: "GET all messages",
        data: [
            {
                messages: messages,
            },
        ],
    });
};

const getMessageById = async (req, res) => {
    let id = req.params.id;
    let message = await Message.findById(id);
    res.json({
        status: "success",
        message: "GET message by ID",
        data: [
            {
                message: message,
            },
        ],
    });
}

const create = async (req, res) => {
    let message = req.body.message;
    let m = new Message();
    m.message = message;
    await m.save();

    res.json({
        status: "success",
        message: "POST a new message",
        data: [
            {
                message: m,
            },
        ],
    });
};

const updateMessageById = async (req, res) => {
    let id = req.params.id;
    let message = req.body.message;
    let m = await Message.findById(id);
    m.message = message;
    await m.save();

    res.json({
        status: "success",
        message: "UPDATE a message",
        data: [
            {
                message: m,
            },
        ],
    });
};


module.exports.index = index;
module.exports.getMessageById = getMessageById;
module.exports.create = create;
module.exports.updateMessageById = updateMessageById;
