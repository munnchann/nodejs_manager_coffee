import express from "express";
import homeController from '../controller/homeController';
let router = express.Router();

const initWebroute = (app) =>{
    router.get('/', homeController.getHomepage);

    return app.use('/',router);
}

export default initWebroute;