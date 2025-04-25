import asyncHandler from "express-async-handler";
import { Feedback } from "../models/feedback.model.js";

//Create a feedback
const createFeedback = asyncHandler(async (req, res) => {
  const { username, email, feedbackText } = req.body;

  if ([username, email, feedbackText].some((field) => field?.trim() === "")) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newFeedback = await Feedback.create({
    username,
    email,
    feedbackText,
  });

  if (!newFeedback) {
    return res
      .status(500)
      .json({ message: "Something went wrong while creating feedback" });
  }

  return res.status(201).json({
    newFeedback,
    message: "Feedback created successfully",
  });
});

//get all feedbacks
const getFeedbacks = asyncHandler(async (req, res) => {
  const feedbacks = await Feedback.find();

  if (feedbacks.length === 0) {
    return res.status(200).json({ message: "Feedback not found" });
  }

  return res.status(200).json({
    feedbacks,
    message: "All Feedback fetched successfully",
  });
});

export { createFeedback, getFeedbacks };
