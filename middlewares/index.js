const {
  addValidation,
  updateValidation,
  favoriteValidation,
} = require("./validation");
const ctrlWrapper = require("./ctrlWrapper");
const isValidId = require("./isValidId");

module.exports = {
  addValidation,
  updateValidation,
  favoriteValidation,
  ctrlWrapper,
  isValidId,
};
