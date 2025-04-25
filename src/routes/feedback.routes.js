import { Router } from "express";
import {
  createFeedback,
  getFeedbacks,
} from "../controllers/feedback.controller.js";

const router = Router();

router.route("/").post(createFeedback);
router.route("/").get(getFeedbacks);

export default router;
