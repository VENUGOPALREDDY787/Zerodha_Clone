const { Schema, model } = require('mongoose');
const HoldingSchema = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});
const HoldingModle = new model('holding', HoldingSchema);
module.exports ={ HoldingModle };