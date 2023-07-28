import express from "express"; 
import configViewEngin from "./config/viewEngine";
import initWebroute from './route/web';
require('dotenv').config();
const app = express();
const port = process.env.PORT || 8484;
configViewEngin(app);
initWebroute(app);


app.listen(port, ()=>{
    console.log("server run")
})