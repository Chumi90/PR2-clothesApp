//User Models
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        name:{type: String, required: true},
        email: {type: String, required: true},
        password:{type: String, required: true},
        category:{type: String, required: true},
    }, { timestamps: true });

const User = mongoose.model('Product', userSchema);

module.exports = User;