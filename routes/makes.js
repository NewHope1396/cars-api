const express = require("express");

const router = express.Router();

const ctrl = require("../controllers");

router.get("/", ctrl.getMakes);

router.get("/models", ctrl.getModels);

module.exports = router;
