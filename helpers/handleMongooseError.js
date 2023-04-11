const handleMongooseError = (error, data, next) => {
  // console.log(error);
  const { name, code } = error;
  const status = name === "MongoServerError" && code === 11000 ? 409 : 400;
  error.status = status;
  // let status = null;
  // let message = error.message;
  // if (name === "MongoServerError" && code === 11000) {
  //   status = 409;
  //   message = "Email in use";
  // } else {
  //   status = 400;
  // }
  // error.status = status;
  // error.message = message;
  next();
};

module.exports = handleMongooseError;
