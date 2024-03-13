import express from 'express'
const app = express()
const path = require("path")
import {v4} from 'uuid'
import mongoose from "mongoose";
const hbs = require("hbs")


app.use(express.json());
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}));

hbs.registerPartials(__dirname + '/views/partials');

app.use("/",require("./routes"))

await mongoose.connect('mongodb://127.0.0.1:27017/RecipeSite').then(()=>{
    app.listen(3500, () => {
        console.log("app is litening on 3500");
    })
})

