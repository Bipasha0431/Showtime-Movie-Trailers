import express from "express";
import { signIn, logout, signUp } from "../controllers/userController.js";

const router = express.Router();

// router.route("/").get(protect, allUsers);
router.route("/signin").post(signIn);
router.route("/signup").post(signUp);
router.route("/logout").get(logout);

export default router;
