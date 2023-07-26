import express from "express"; 
import configViewEngin from "./config/viewEngine";
const app = express();
const port = 3000;
configViewEngin(app);

app.get('/', (req,res) =>{
    res.render('index.ejs');
})

app.listen(port, ()=>{
    console.log("server run")
})