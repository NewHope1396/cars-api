const getModels = async (req, res, next) => {
  try {
    res.json({
      name: "Balalusha",
    });
  } catch (error) {
    error.message = "Server error";
    next(error);
  }
};

module.exports = getModels;
