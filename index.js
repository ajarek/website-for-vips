require("dotenv").config();

const mongoose =require('mongoose')
const cors = require("cors");
const express = require("express");
const cookieParser = require('cookie-parser')

const app = express();
app.use(cookieParser())

mongoose.connect('mongodb://127.0.0.1:27017/mongo-test',()=>{console.log('Connection to mongodb database was successful!');})
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')
app.use(express.json());
app.use(cors());

app.use(require('./routes/auth'))
app.use(require('./routes/users'))

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));