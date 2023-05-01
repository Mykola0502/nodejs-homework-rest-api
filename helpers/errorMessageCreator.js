const bodyValuesNameChecker = require("./bodyValuesNameChecker");

const errorMessageCreator = (req, error) => {
  const checkerMessage = bodyValuesNameChecker(req.body);

  const switchName = req.method + " " + req.baseUrl;

  switch (switchName) {
    case "POST /api/contacts":
      return checkerMessage || error.message;

    case "PUT /api/contacts":
      if (JSON.stringify(req.body) === "{}") {
        return "Missing fields";
      }
      return error.message;

    case "POST /api/users":
      if (JSON.stringify(req.body) === "{}") {
        return "Missing required field email";
      }
      return error.message;

    case "PATCH /api/contacts": {
      // const createErrorMessage = () => {
      //   const { favorite } = req.body;
      //   if (favorite !== undefined && favorite !== "0" && favorite !== "1") {
      //     return `'${favorite}' is not correct favorite format`;
      //   }
      //   if (error || !favorite) {
      //     const errMessage = error.message;
      //     if (!favorite) {
      //       return `"${errMessage}. Missing field favorite"`;
      //     }
      //     return error.message;
      //   }
      // };
      // return createErrorMessage();
      return createErrorMessage(req, error);
    }

    default:
      return error.message;
  }
};

const createErrorMessage = (req, error) => {
  const { favorite } = req.body;

  if (favorite !== undefined && favorite !== "0" && favorite !== "1") {
    return `'${favorite}' is not correct favorite format`;
  }

  if (error || !favorite) {
    const errMessage = error.message;
    if (!favorite) {
      return `"${errMessage}. Missing field favorite"`;
    }
    return error.message;
  }
};

module.exports = errorMessageCreator;
