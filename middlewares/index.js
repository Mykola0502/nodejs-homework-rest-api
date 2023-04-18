const { validationBody } = require("./validation");
const ctrlWrapper = require("./ctrlWrapper");
const isValidId = require("./isValidId");
const authenticate = require("./authenticate");
const upload = require("./upload");

module.exports = {
  validationBody,
  ctrlWrapper,
  isValidId,
  authenticate,
  upload,
};
