const { RequestError } = require("../helpers");
const { errorMessageCreator } = require("../helpers");

const validationBody = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      // const errorMessageCreator = () => {
      //   const checkerMessage = bodyValuesNameChecker(req.body);
      //   const switchName = req.method + " " + req.baseUrl;
      //   switch (switchName) {
      //     case "POST /api/contacts":
      //       return checkerMessage || error.message;
      //     case "PUT /api/contacts":
      //       if (JSON.stringify(req.body) === "{}") {
      //         return "Missing fields";
      //       }
      //       return error.message;
      //     default:
      //       return error.message;
      //   }
      // };
      next(RequestError(400, errorMessageCreator(req, error)));
    }

    next();
  };
};

module.exports = {
  validationBody,
};
