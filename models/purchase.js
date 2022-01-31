const mongoose = require('mongoose')

const {Schema, model} = mongoose

const purchaseSchema = new Schema({
    name: String,
    cost: Number,
    link: String,
    submitted: Boolean,
    purchased: Boolean,
    notes: String
}, {timestamps: true})

const Purchase = model('Purchase', purchaseSchema)

module.exports = Purchase