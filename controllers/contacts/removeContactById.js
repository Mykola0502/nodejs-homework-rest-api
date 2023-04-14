const { NotFound } = require("http-errors");

const { Contact } = require("../../models");

const removeContactById = async (req, res) => {
  const { _id: owner } = req.user;
  const { contactId } = req.params;

  const result = await Contact.findOneAndRemove({ _id: contactId, owner });

  if (!result) {
    throw new NotFound("Not found");
  }

  res.json({
    status: "success",
    code: 200,
    message: "contact deleted",
  });
};

module.exports = removeContactById;
