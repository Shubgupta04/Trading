const mongoose = require('mongoose');

const positionSchema = new mongoose.Schema({
    product:String,
    name:String,
    qty:Number,
    avg:Number,
    price:Number,
    net:String,
    day:String,
    isLoss:Boolean,
});



const Position = new mongoose.model("position",positionSchema);

module.exports = Position;