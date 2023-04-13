const { Contact } = require("../../models");

const getContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.find({ owner }).populate(
    "owner",
    "email subscription"
  );
  res.json({
    status: "success",
    code: 200,
    data: {
      contacts: result,
    },
  });
};

module.exports = getContacts;
