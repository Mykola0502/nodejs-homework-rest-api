const contactsOperations = require("../../models/contacts");

const getContacts = async (req, res) => {
  const result = await contactsOperations.listContacts();
  res.json({
    status: "success",
    code: 200,
    data: {
      contacts: result,
    },
  });
};

module.exports = getContacts;
