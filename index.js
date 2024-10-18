import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import advertRouter from "./routes/advertRoutes.js";
import userRouter from "./routes/userRoutes.js";

await mongoose.connect(process.env.MONGO_URI);

const app = express();

app.use(express.json());
app.use(cors());

app.use(advertRouter);
app.use(userRouter);

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
