require('dotenv').config();//process tracking all proces this will add to process
const express = require('express');
const User = require('./Models/User.js');
const mongoose = require('mongoose');
const Holding = require('./Models/Holding.js');
const Order = require('./Models/Order.js');
const Position = require('./Models/Position.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute.js");

const PORT = process.env.PORT||4000;
const uri = process.env.MONGO_URL;

const app = express();

const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true
  })
);

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send("Home route");
});

app.get('/allHoldings',async(req,res)=>{

 let allholdings = await Holding.find();
 res.json(allholdings);
});
app.get('/allPositions',async(req,res)=>{
 let allPositions = await Position.find();
 res.json(allPositions);
});





mongoose.connect(uri)
 .then(()=>{
     console.log("db connected")
 })
 .catch((err)=>{
     console.log(err);
 })
app.listen(PORT,()=>{
    console.log("app is listening to the port 4000")
});


app.use("/", authRoute);


