import { Router } from "express";
import {
  getProfile,
  userLogin,
  userLogout,
  userRegister,
} from "../controllers/userControllers.js";
import { isAuthenticated } from "../middlewares/auth.js";

const userRouter = Router();

userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);
userRouter.get("/profile", isAuthenticated, getProfile);
userRouter.post("/logout", isAuthenticated, userLogout);

export default userRouter;
