const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, completed: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const todo = mongoose.model('Todo', taskSchema);

module.exports = todo;