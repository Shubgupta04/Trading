const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name:String,
    qty:Number,
    price:String,
    mode:String,
});


const Order =  mongoose.model("Order",orderSchema);

module.exports = Order;