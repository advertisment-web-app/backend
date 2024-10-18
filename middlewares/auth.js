import { expressjwt } from "express-jwt";
import { userModel } from "../models/userModels.js";
import { permissions } from "../utils/rbac.js";

export const isAuthenticated = expressjwt({
  secret: process.env.JWT_PRIVATE_KEY,
  algorithms: ["HS256"],
});

export const hasPermissions = (action) => {
  return async (req, res, next) => {
    try {
      const user = await userModel.findById(req.auth.id);
      const permission = permissions.find((value) => value.role === user.role);
      if (!permission) {
        res.status(404).json("You are not authorized here");
      }
      if (permission.actions.includes(action)) {
        next();
      }
    } catch (error) {
      next(error);
    }
  };
};
