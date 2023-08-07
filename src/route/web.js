import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();

const initWebroute = (app) => {
  router.get("/", homeController.getHomepage);
  router.get("/detail/user/:userId", homeController.getDetailPage);
  router.post("/create-new-user", homeController.CreateNewUser);
  router.post("/delete-user", homeController.DeleteUser);
  router.get("/edit-user/:id", homeController.getEditPage);
  router.post("/update-user", homeController.UpdateUser);
  return app.use("/", router);
};

export default initWebroute;
