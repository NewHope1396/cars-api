const Car = require("../models/car");

const getModels = async (req, res, next) => {
  try {
    const model = req.params.model;
    const models = await Car.find({ model_make_id: model });
    const result = models.map((model) => {
      return {
        value: model.model_name,
        label: model.model_name,
      };
    });
    res.json(result);
  } catch (error) {
    error.message = "Server error";
    next(error);
  }
};

module.exports = getModels;
