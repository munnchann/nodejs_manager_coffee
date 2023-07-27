import express from "express"; 
import configViewEngin from "./config/viewEngine";
require('dotenv').config();
const app = express();
const port = process.env.PORT || 8484;
configViewEngin(app);

app.get('/', (req,res) =>{
    res.render('index.ejs');
})

app.listen(port, ()=>{
    console.log("server run")
})