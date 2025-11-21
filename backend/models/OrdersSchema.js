const { Schema, model } = require('mongoose');
const OrdersSchema = new Schema({
    
    name: String,
    qty: Number,
    price: Number,
    mode: String,
});
const OrdersModle = new model('order', OrdersSchema);
module.exports ={ OrdersModle };