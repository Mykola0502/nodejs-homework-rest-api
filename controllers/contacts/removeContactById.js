const { NotFound } = require("http-errors");

const contactsOperations = require("../../models/contacts");

const removeContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperations.removeContact(contactId);
  if (!result) {
    throw new NotFound("Not found");
  }
  res.json({
    status: "success",
    code: 200,
    message: "contact deleted",
    // data: {
    //   result,
    // },
  });
};

module.exports = removeContactById;
