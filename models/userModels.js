import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "vendor"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

export const userModel = model("User", userSchema);