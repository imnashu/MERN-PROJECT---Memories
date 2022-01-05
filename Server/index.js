import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from './routes/posts.js'
const app = express();

app.use(bodyParser.json({limit:"30mb" , extended : 'true'}));
app.use(bodyParser.urlencoded({limit:'30mb', extended:'true'}));
app.use(cors());

app.use('/posts' , router)
// setting up my Mongo db atlas URL

const CONNECTION_URL = 'mongodb+srv://Nashu:Nashu@cluster0.jg4ca.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// , {useNewUrlParser : true, useUnifiedTopology : true}
mongoose.connect(CONNECTION_URL)
         .then(() => {
             app.listen(5000,()=>{console.log("listening")})
         })
         .catch((err) => { console.log(err.message,"hvhhhhhhhhhhhhhhhhhhhh")})

