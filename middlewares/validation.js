const addvalidation = (schema) => {
  return (req, res, next) => {
    const { name, phone, email } = req.body;
    const { error } = schema.validate(req.body);
    if (error) {
      error.status = 400;
      next(error);
      return;
    } else if (!name || !phone || !email) {
      const error = new Error(". Missing required field");
      error.status = 400;
      next(error);
      return;
    }

    next();
  };
};

const updatevalidation = (schema) => {
  return (req, res, next) => {
    const { name, phone, email } = req.body;
    const { error } = schema.validate(req.body);
    console.log(name, phone, email);
    if (error) {
      error.status = 400;
      next(error);
      return;
    } else if (!name && !phone && !email) {
      const error = new Error("Missing fields");
      error.status = 400;
      next(error);
      return;
    }

    next();
  };
};

module.exports = {
  addvalidation,
  updatevalidation,
};
