const { Schema, model } = require("mongoose");

const carSchema = Schema(
  {
    model_make_id: { type: String },
    model_name: { type: String },
  },
  { versionKey: false }
);

const Car = model("Car", carSchema);

module.exports = Car;
