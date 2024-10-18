import { userModel } from "../models/userModels.js";
import {
  userLoginValidator,
  userRegisterValidator,
} from "../validators/userValidators.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const userRegister = async (req, res, next) => {
  try {
    // checking if inputed details are correct
    const { error, value } = userRegisterValidator.validate(req.body);

    if (error) {
      res.status(422).json(error);
    }
    // Checking the database if the email already exist
    const user = await userModel.findOne({ email: value.email });
    if (user) {
      res.status(200).json("User Already exist");
    }
    const hashedPassword = bcrypt.hashSync(value.password, 10);
    // save to database
    await userModel.create({
      ...value,
      password: hashedPassword,
    });
    // send user an email for confirmation
    // Response
    res.status(200).json("User Successfully registered");
  } catch (error) {
    next(error);
  }
};

export const userLogin = async (req, res, next) => {
  try {
    // validate the person credentials
    const { error, value } = userLoginValidator.validate(req.body);
    if (error) {
      res.status(422).json(error);
    }
    // find user with email
    const user = await userModel.findOne({ email: value.email });
    if (!user) {
      res.status(404).json("Invalid Credentials");
    }
    // check for validity of a password
    const corrctPassword = bcrypt.compare(value.password, user.password);
    if (!corrctPassword) {
      res.status(404).json("Invalid Credentials");
    }
    // Now generate a token for the person
    const token = jwt.sign({ id: user.id }, process.env.JWT_PRIVATE_KEY, {
      expiresIn: "24h",
    });
    res.json({
      message: "User logged In",
      accessToken: token,
    });
  } catch (error) {
    next(error);
  }
};

export const getProfile = (req, res, next) => {
    try {
        const user = userModel.findById(req.params.id).select({
            password: false
        });
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}

export const userLogout = (req, res, next) => {
    try {
        res.json("Log Out successful")
    } catch (error) {
        next(error)
    }
}