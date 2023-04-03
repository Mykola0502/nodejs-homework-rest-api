const { RequestError } = require("../helpers");

const addValidation = (schema) => {
  return (req, res, next) => {
    const { name, phone, email } = req.body;
    const { error } = schema.validate(req.body);
    if (error || !name || !phone || !email) {
      const errMessage = error.message;
      if (!name || !phone || !email) {
        const message = `"${errMessage}. Missing required field"`;
        const error = RequestError(400, message);
        // error.status = 400;
        // error.message += ". Missing required field";
        next(error);
        return;
      }
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
    const noBody = !name && !phone && !email;
    if (error || noBody) {
      if (noBody) {
        const error = RequestError(400, "Missing fields");
        next(error);
        return;
      }
      error.status = 400;
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
    if (favorite && favorite !== "0" && favorite !== "1") {
      const error = RequestError(
        400,
        `'${favorite}' is not correct favorite format`
      );
      // const error = new Error("Missing field favorite");
      // error.status = 400;
      next(error);
      return;
    }
    if (error || !favorite) {
      const errMessage = error.message;
      if (!favorite) {
        const message = `"${errMessage}. Missing field favorite"`;
        const error = RequestError(400, message);
        // const error = new Error(message);
        // error.status = 400;
        next(error);
        return;
      }
      error.status = 400;
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
