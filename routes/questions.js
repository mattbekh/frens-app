/*

NOT YET HOOKED UP TO THE SERVER.JS

*/

const express = require("express");
const router = express.Router();

router.get("/questions", (req, res) => {
  res.send("ALL USERS");
});

module.exports = router;
