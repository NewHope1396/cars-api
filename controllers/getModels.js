const getModels = async (req, res, next) => {
  try {
    res.json({
      answer: "It still works",
    });
  } catch (error) {
    error.message = "Server error";
    next(error);
  }
};

module.exports = getModels;
