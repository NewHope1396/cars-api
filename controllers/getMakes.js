const Car = require("../models/car");

const getMakes = async (req, res, next) => {
  try {
    const makes = await Car.find().distinct("model_make_id");
    const result = makes.map((make) => {
      if (make.includes("-")) {
        const index = make.indexOf("-") + 1;
        const newMake = make
          .replace("-", " ")
          .replace(make[index], make[index].toUpperCase());
        return {
          value: make,
          label: newMake[0].toUpperCase() + newMake.slice(1),
        };
      }

      if (make.length <= 3) {
        return {
          value: make,
          label: make.toUpperCase(),
        };
      }

      return {
        value: make,
        label: make[0].toUpperCase() + make.slice(1),
      };
    });
    res.json(result);
  } catch (error) {
    error.message = "Server error";
    next(error);
  }
};

module.exports = getMakes;
