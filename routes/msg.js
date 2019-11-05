const express = require("express");
const Router = express.Router();

const msgController = require("../controllers/msgController");

Router.route("/")
  .get(msgController.getAllMessage)
  .post(msgController.addMessage);

module.exports = Router;
