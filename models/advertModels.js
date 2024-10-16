import { Schema, model } from "mongoose";

const advertSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: Types.ObjectId,
    ref: "user",
  },
  img: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  price: {
    type: Number,
    required: true,
  },
});

export const advertModel = model("advert", advertSchema)