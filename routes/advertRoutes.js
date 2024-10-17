import { Router } from "express";
import {
  addAdvert,
  getAdevert,
  getAllAdvert,
} from "../controllers/advertControllers.js";

const advertRouter = Router();

advertRouter.post("/ad", addAdvert);
advertRouter.get("/getallad", getAllAdvert);
advertRouter.get("/getad/:id", getAdevert);


export default advertRouter;
