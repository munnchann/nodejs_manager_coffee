import express from "express";
const configViewEngin = (app) =>{
    app.set("view engine", "ejs");
    app.set("views","./src/views")
}
export default configViewEngin;