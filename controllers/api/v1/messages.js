// require the Message model
const Message = require("../../../models/Message");

const index = async (req, res) => {
    const { user } = req.params; // Extract the username from the request parameters

    let messages;
    if (user) {
        messages = await Message.find({ user: user });  // If a specific user is provided, filter messages by user
    } else {
        messages = await Message.find({}); // If no user is provided, get all messages
    }

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

//delete message by id
const deleteMessageById = async (req, res) => {
    let id = req.params.id;
    let m = await Message.findByIdAndDelete(id);
    if(m){
        res.json({
            status: "success",
            message: "DELETE a message",
        });
    }else{
        res.json({
            status: "error",
            message: "DELETE a message failed",
        });
    }
};


module.exports.index = index;
module.exports.getMessageById = getMessageById;
module.exports.create = create;
module.exports.updateMessageById = updateMessageById;
module.exports.deleteMessageById = deleteMessageById;
