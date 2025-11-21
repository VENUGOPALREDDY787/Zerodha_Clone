const { Schema, model } = require('mongoose');
const PostionSchema = new Schema({
     product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
});
const PostionModle = new model('postion', PostionSchema);
module.exports ={ PostionModle };