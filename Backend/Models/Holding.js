const mongoose = require('mongoose');

const holdingSchema = new mongoose.Schema({
    name:String,
    qty:Number,
    avg:Number,
    price:String,
    net:String,
    day:String,
});


const Holding =  mongoose.model("Holding",holdingSchema);

module.exports = Holding;