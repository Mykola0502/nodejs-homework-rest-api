const getContacts = require("./getContacts");
const getContactById = require("./getContactById");
const addContact = require("./addContact");
const updateContactById = require("./updateContactById");
const removeContactById = require("./removeContactById");
const updateFavoriteContact = require("./updateFavoriteContact");

module.exports = {
  getContacts,
  getContactById,
  addContact,
  updateContactById,
  removeContactById,
  updateFavoriteContact,
};
