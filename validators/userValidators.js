import Joi from "joi";

export const userRegisterValidator = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string(),
  password: Joi.string(),
  role: Joi.string().required(),
});

export const userLoginValidator = Joi.object({
  email: Joi.string(),
  password: Joi.string(),
});
