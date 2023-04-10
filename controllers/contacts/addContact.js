const {
  Contact,
  // JoiAddContactSchema
} = require("../../models");
// const { validationBody } = require("../../middlewares");
// const { bodyValuesNameChecker } = require("../../helpers");

const addContact = async (req, res, next) => {
  // const { error } = validationBody(req.body, JoiAddContactSchema);
  // if (error) {
  //   const errorMessage = validationBody(req.body, JoiAddContactSchema).error
  //     .message;
  //   const checkerMessage = bodyValuesNameChecker(req.body);
  //   res.status(400).json({ message: checkerMessage || errorMessage });
  //   return;
  // }
  const result = await Contact.create(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
  next();
};

// const addContact = async (req, res) => {
//   if (validationBody(req.body, JoiAddContactSchema).error) {
//     const errorMessage = validationBody(req.body, JoiAddContactSchema).error
//       .message;
//     const checkerMessage = bodyValuesNameChecker(req.body);
//     res.status(400).json({ message: checkerMessage || errorMessage });
//     return;
//   }
//   const result = await Contact.create(req.body);
//   res.status(201).json({
//     status: "success",
//     code: 201,
//     data: {
//       result,
//     },
//   });
// };

module.exports = addContact;

/**
 *
 *
 */

// const { Contact } = require("../../models");

// const addContact = async (req, res) => {
//   const result = await Contact.create(req.body);
//   res.status(201).json({
//     status: "success",
//     code: 201,
//     data: {
//       result,
//     },
//   });
// };

// module.exports = addContact;
