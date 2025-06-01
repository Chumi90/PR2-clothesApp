//Products Models
const mongoose = require('mongoose');

const produtSchema = new mongoose.Schema({
        product:{type: String, required: true},
        description: {type: String, required: true},
        image:{type: String, required: true},
        category:{type: String, required: true},
        size:{type: String, required: true},
        price:{type: Number, required: true}
    }, { timestamps: true });

const Produt = mongoose.model('Product', produtSchema);

module.exports = Produt;