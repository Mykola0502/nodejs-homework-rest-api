const { NotFound } = require("http-errors");

const { Contact } = require("../../models");

const updateFavoriteContact = async (req, res) => {
  const { _id: owner } = req.user;
  const { contactId } = req.params;
  const { favorite } = req.body;
  const result = await Contact.findOneAndUpdate(
    { _id: contactId, owner },
    { favorite },
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

module.exports = updateFavoriteContact;
