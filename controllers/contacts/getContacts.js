const { Contact } = require("../../models");

const getContacts = async (req, res) => {
  const { _id: owner } = req.user;

  let { page = 1, limit = 5 } = req.query;
  const parsedPage = parseInt(page);
  const parsedLimit = parseInt(limit);
  page = parsedPage >= 1 ? parsedPage : 1;
  limit = parsedLimit > 20 || parsedLimit < 1 ? 20 : parsedLimit;

  const skip = (parseInt(page) - 1) * limit;

  const result = await Contact.find({ owner }, "", { skip, limit }).populate(
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
