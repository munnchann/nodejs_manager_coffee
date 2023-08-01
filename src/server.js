import express from "express"; 
import configViewEngin from "./config/viewEngine";
import initWebroute from './route/web';
import conn from './config/dbConnect';
require('dotenv').config();
const app = express();
const port = process.env.PORT || 8080;
configViewEngin(app);
initWebroute(app);


app.listen(port, ()=>{
    console.log("server run", port)
})