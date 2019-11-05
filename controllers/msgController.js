const data = require("../datas/msg");
const { sendResponse } = require("../helpers/index");

module.exports = {
  getAllMessage: (req, res) => {
    try {
      sendResponse(res, 200, false, null, data);
    } catch (error) {
      sendResponse(res, 500, true, error, []);
    }
  },

  addMessage: (req, res) => {
    try {
      const { message } = req.body;
      data.message.push(message);

      sendResponse(res, 200, false, null, data);
    } catch (error) {
      sendResponse(res, 500, true, error, []);
    }
  }
};
