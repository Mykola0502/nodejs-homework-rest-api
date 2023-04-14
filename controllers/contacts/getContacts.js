const { Contact } = require("../../models");

const getContacts = async (req, res) => {
  const { _id: owner } = req.user;

  let { page = 1, limit = 5, name, email, phone, favorite } = req.query;

  const query = { owner };

  if (name) {
    query.name = name;
  }

  if (email) {
    query.email = email;
  }

  if (phone) {
    query.phone = phone;
  }

  if (favorite) {
    query.favorite = favorite;
  }

  const parsedPage = parseInt(page);
  const parsedLimit = parseInt(limit);
  page = parsedPage >= 1 ? parsedPage : 1;
  limit = parsedLimit > 20 || parsedLimit < 1 ? 20 : parsedLimit;

  const skip = (parseInt(page) - 1) * limit;

  const totalContactsOwner = await Contact.find(query).count();

  const result = await Contact.find(query, "", { skip, limit }).populate(
    "owner",
    "email subscription"
  );

  res.json({
    status: "success",
    code: 200,
    data: {
      totalContacts: totalContactsOwner,
      page,
      totalPages: Math.ceil(totalContactsOwner / limit),
      currentOnPage: result.length,
      contacts: result,
    },
  });
};

module.exports = getContacts;
