import express from "express";
import {
  contactController,
  getContactController,
} from "../controllers/contactController.js";
import { requireSignIn, verifyAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/submit", contactController);

router.get("/getContacts", getContactController);

export default router;
