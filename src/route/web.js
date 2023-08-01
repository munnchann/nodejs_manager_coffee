import express from "express";
import homeController from '../controller/homeController';

let router = express.Router();

const initWebroute = (app) =>{
    router.get('/', homeController.getHomepage);
    router.get('/detail/user/:userId', homeController.getDetailPage)
    return app.use('/',router);
}

export default initWebroute;