var express = require("express");
var router = express.Router();
var generateName = require("../generate-name");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { name: generateName() });
});

module.exports = router;
