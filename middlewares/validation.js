const { RequestError } = require("../helpers");

const addValidation = (schema) => {
  return (req, res, next) => {
    const { name, phone, email } = req.body;
    const { error } = schema.validate(req.body);
    if (error) {
      error.status = 400;
      next(error);
      return;
    } else if (!name || !phone || !email) {
      // const error = RequestError(400, ". Missing required field");
      const error = new Error(". Missing required field");
      error.status = 400;
      next(error);
      return;
    }

    next();
  };
};

const updateValidation = (schema) => {
  return (req, res, next) => {
    const { name, phone, email } = req.body;
    const { error } = schema.validate(req.body);
    if (error) {
      error.status = 400;
      next(error);
      return;
    } else if (!name && !phone && !email) {
      const error = RequestError(400, "Missing fields");
      // const error = new Error("Missing fields");
      // error.status = 400;
      next(error);
      return;
    }

    next();
  };
};

const favoriteValidation = (schema) => {
  return (req, res, next) => {
    const { favorite } = req.body;
    const { error } = schema.validate(req.body);
    if (error) {
      error.status = 400;
      next(error);
      return;
    } else if (!favorite) {
      const error = RequestError(400, "Missing field favorite");
      // const error = new Error("Missing field favorite");
      // error.status = 400;
      next(error);
      return;
    }

    next();
  };
};

module.exports = {
  addValidation,
  updateValidation,
  favoriteValidation,
};
