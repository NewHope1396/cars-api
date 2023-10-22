const express = require("express");
const app = express();
const cors = require("cors");
const makesRouter = require("./routes/makes");

app.use(express.json());
app.use(cors());

app.use("/makes", makesRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
