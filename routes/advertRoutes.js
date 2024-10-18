import { Router } from "express";
import {
  addAdvert,
  deleteAdvert,
  getAdevert,
  getAllAdvert,
  updateAdvert,
} from "../controllers/advertControllers.js";

import { isAuthenticated } from "../middlewares/auth.js";

const advertRouter = Router();

advertRouter.post("/ad",isAuthenticated, addAdvert);
advertRouter.get("/getallad", isAuthenticated, getAllAdvert);
advertRouter.get("/getad/:id", isAuthenticated, getAdevert);
advertRouter.patch("/updatead/:id", isAuthenticated, updateAdvert);
advertRouter.delete("/deletedad/:id", isAuthenticated, deleteAdvert);


export default advertRouter;
