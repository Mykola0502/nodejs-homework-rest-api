const contactsOperations = require("../../models/contacts");

const getContacts = async (req, res, next) => {
  try {
    const result = await contactsOperations.listContacts();
    res.json({
      status: "success",
      code: 200,
      data: {
        contacts: result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getContacts;
