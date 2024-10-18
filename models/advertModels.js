import { Schema, model, Types } from "mongoose";
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
      type: Types.ObjectId,
      ref: "User",
    },
    category: {
      type: String,
      enum: [
        "clothing and accessories",
        "Electronics and gadgets",
        "Home and living",
        "Beauty and personal care",
        "Handmade and Craft Items",
        "Toys and games",
        "Books and Stationary",
        "Sports and Outdoor",
        "Automotive",
        "Health and fitness",
        "Food and Beverages",
        "Art and collectibles",
        "Digital Product",
        "Services",
      ],
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
