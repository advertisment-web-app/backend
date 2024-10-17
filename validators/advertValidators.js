import Joi from "joi";

export const addAdvertValidators = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required().min(5).max(200),
  user: Joi.string(),
  img: Joi.string(),
  price: Joi.number().required(),
});
