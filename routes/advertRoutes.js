import { Router } from "express";
import {
  addAdvert,
  deleteAdvert,
  getAdevert,
  getAllAdvert,
  updateAdvert,
} from "../controllers/advertControllers.js";

import { hasPermissions, isAuthenticated } from "../middlewares/auth.js";

const advertRouter = Router();

advertRouter.post("/ad", isAuthenticated, hasPermissions("add_advert"), addAdvert);
advertRouter.get("/getallad", isAuthenticated, hasPermissions("viewall_advert"), getAllAdvert);
advertRouter.get("/getad/:id", isAuthenticated, hasPermissions("view_advert"), getAdevert);
advertRouter.patch("/updatead/:id", isAuthenticated, hasPermissions("update_advert"), updateAdvert);
advertRouter.delete("/deletedad/:id", isAuthenticated, hasPermissions("delete_advert"), deleteAdvert);


export default advertRouter;
