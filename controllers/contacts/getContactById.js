const { NotFound } = require("http-errors");

const contactsOperations = require("../../models/contacts");

const getContactById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactsOperations.getContactById(contactId);
    if (!result) {
      /**
       *    відповідь на помилку 404 з використанням пакету http-errors
       */
      // //   через NotFound
      throw new NotFound("Not found");

      // //   через createError
      // throw createError(404, "Not found");

      /**
       *     відповідь на помилку 404 з генеруванням помилки
       */
      //   const error = new Error("Not found");
      //   error.status = 404;
      //   throw error;

      /**
       *   звичайна відповідь на помилку 404
       */
      // res.status(404).json({
      //   status: "error",
      //   code: 404,
      //   message: "Not found",
      // });
      // return;
    }
    res.json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getContactById;
