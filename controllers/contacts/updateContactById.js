const { NotFound } = require("http-errors");

const { Contact } = require("../../models");

const updateContactById = async (req, res) => {
  const { _id: owner } = req.user;
  const { contactId } = req.params;

  const result = await Contact.findOneAndUpdate(
    { _id: contactId, owner },
    req.body,
    {
      new: true,
    }
  );

  if (!result) {
    throw new NotFound("Not found");
  }

  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = updateContactById;
