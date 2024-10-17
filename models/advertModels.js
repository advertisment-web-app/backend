import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const advertSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      // ref: "user  Types.ObjectId",
    },
    img: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, 
  }
);

advertSchema.plugin(toJSON);

export const advertModel = model("advert", advertSchema);
