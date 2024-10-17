import { Router } from "express";
import {
  addAdvert,
  deleteAdvert,
  getAdevert,
  getAllAdvert,
  updateAdvert,
} from "../controllers/advertControllers.js";

const advertRouter = Router();

advertRouter.post("/ad", addAdvert);
advertRouter.get("/getallad", getAllAdvert);
advertRouter.get("/getad/:id", getAdevert);
advertRouter.patch("/updatead/:id", updateAdvert);
advertRouter.delete("/deletedad/:id", deleteAdvert);


export default advertRouter;
