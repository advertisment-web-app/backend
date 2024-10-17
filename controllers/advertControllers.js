import { advertModel } from "../models/advertModels.js";
import { addAdvertValidators } from "../validators/advertValidators.js";

export const addAdvert = async (req, res, next) => {
  try {
    const { error, value } = addAdvertValidators.validate(req.body);
    if (error) {
      return res.status(422).json(error);
    }
    const newAdvert = await advertModel.create(value);
    res.status(201).json(newAdvert);
  } catch (error) {
    next(error);
  }
};

export const getAllAdvert = async (req, res, next) => {
  try {
    const { filter = "{}", limit = 10, skip = 0 } = req.query;
    const advert = await advertModel
      .find(JSON.parse(filter))
      .limit(limit)
      .skip(skip);
    res.status(200).json(advert);
  } catch (error) {
    next(error);
  }
};

export const getAdevert = async (req, res, next) => {
  try {
    const advertId = await advertModel.findById(req.params.id);
    if (!advertId) {
      res.status(404).json("No book found");
    }
    res.status(200).json(advertId);
  } catch (error) {
    next(error);
  }
};
