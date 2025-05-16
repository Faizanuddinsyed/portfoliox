import express from "express";
import {
  getAuthUser,
  loginController,
  logoutController,
  registerController,
} from "../controllers/authController.js";


const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/logout", logoutController);
router.get("/me", getAuthUser);

export default router;
