import { Router } from "express";
import {
  getProfile,
  userLogin,
  userLogout,
  userRegister,
} from "../controllers/userControllers.js";
import { hasPermissions, isAuthenticated } from "../middlewares/auth.js";

const userRouter = Router();

userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);
userRouter.get("/profile", isAuthenticated, hasPermissions("get_profile"), getProfile);
// delete profile
// update profile
userRouter.post("/logout", isAuthenticated, userLogout);

export default userRouter;
