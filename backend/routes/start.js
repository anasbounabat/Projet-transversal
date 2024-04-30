import express from "express";
import UsersController from "../controllers/users_controller.js";

const router = express.Router();

router.get("/users", UsersController.index);
router.post("/users", UsersController.store);

export default router;
