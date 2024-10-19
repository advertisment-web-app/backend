import { Router } from "express";
import {
    deleteUserProfile,
  getProfile,
  updateUserProfile,
  userLogin,
  userLogout,
  userRegister,
} from "../controllers/userControllers.js";
import { hasPermissions, isAuthenticated } from "../middlewares/auth.js";

const userRouter = Router();

userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);
userRouter.get("/profile", isAuthenticated, hasPermissions("get_profile"), getProfile);
userRouter.delete("/delete", isAuthenticated, hasPermissions("delete_profile"), deleteUserProfile)
userRouter.patch("/update", isAuthenticated, hasPermissions("update_profile"), updateUserProfile)
userRouter.post("/logout", isAuthenticated, userLogout);

export default userRouter;
