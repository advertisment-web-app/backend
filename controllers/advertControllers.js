import { advertModel } from "../models/advertModels.js";
import { addAdvertValidators } from "../validators/advertValidators.js";

// adding an advert by a vendor
export const addAdvert = async (req, res, next) => {
  try {
    const { error, value } = addAdvertValidators.validate(req.body);
    if (error) {
      return res.status(422).json(error);
    }
    const newAdvert = await advertModel.create({
      ...value,
      user: req.auth.id,
    });
    res.status(201).json(newAdvert);
  } catch (error) {
    next(error);
  }
};
// Retrieving all advert by a vendor (both vendor and a user)
export const getAllAdvert = async (req, res, next) => {
  try {
    const { filter = "{}", sort = "{}", limit = 10, skip = 0 } = req.query;
    const advert = await advertModel
      .find(JSON.parse(filter))
      .sort(JSON.parse(sort))
      .limit(limit)
      .skip(skip);
    res.status(200).json(advert);
  } catch (error) {
    next(error);
  }
};

// Retrieving an advert by an id (both vendor and a user)
export const getAdevert = async (req, res, next) => {
  try {
    const advertId = await advertModel.findById(req.params.id);
    if (!advertId) {
      return res.status(404).json("No advert found");
    }
    return res.status(200).json(advertId);
  } catch (error) {
    next(error);
  }
};

// Updating a vendor's advert

export const updateAdvert = async (req, res, next) => {
  try {
    const updatedAdvert = await advertModel.findOneAndUpdate(
      { _id: req.params.id, user: req.auth.id },
      { new: true }
    );
    if (!updatedAdvert) {
      return res.status(404).json("Update wasn't successful");
    }
    return res.status(200).json(updatedAdvert);
  } catch (error) {
    next(error);
  }
};

// Deleting a vendor's advert

export const deleteAdvert = async (req, res, next) => {
  try {
    const deletedAdvert = await advertModel.findOneAndDelete({
      _id: req.params.id,
      user: req.auth.id,
    });
    if (!deletedAdvert) {
      res.status(404).json("Nothing to delete");
    }
    res.status(200).json("Deleted Successfully");
  } catch (error) {
    next(error);
  }
};
