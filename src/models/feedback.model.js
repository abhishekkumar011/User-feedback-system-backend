import { Schema, model } from "mongoose";

const feedbackSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    feedbackText: { type: String, required: true },
  },
  { timestamps: true }
);

export const Feedback = model("Feedback", feedbackSchema);