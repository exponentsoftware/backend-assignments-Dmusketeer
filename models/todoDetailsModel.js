const mongoose = require('mongoose');
const { Schema } = mongoose;

const todosSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    taskStatus: {
        type: String,
        required: true
    },
    createTime: {
        type: Date,
        default: Date.now
    },
    updatedTime: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String
    }
})

const ToDO = mongoose.model("Todos", todosSchema)

module.exports = ToDO;


