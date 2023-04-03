const { NotFound } = require("http-errors");

const { Contact } = require("../../models");

const updateFavoriteContact = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  console.log(favorite);
  const result = await Contact.findByIdAndUpdate(
    contactId,
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

// const { NotFound } = require("http-errors");

// const { Contact } = require("../../models");

// const updateFavoriteContact = async (req, res) => {
//   const { contactId } = req.params;
//   const { favorite } = req.body;
//   const parsedFavorite = Boolean(+favorite);
//   console.log(favorite);
//   // const parsedFavorite = !!favorite;
//   // const parsedFavorite = Boolean(favorite);
//   // let parsedFavorite = false;
//   // if (favorite) {
//   //   parsedFavorite = true;
//   // } else {
//   //   parsedFavorite = false;
//   // }
//   const result = await Contact.findByIdAndUpdate(
//     contactId,
//     { favorite: parsedFavorite },
//     {
//       new: true,
//     }
//   );
//   if (!result) {
//     throw new NotFound("Not found");
//   }
//   res.json({
//     status: "success",
//     code: 200,
//     data: {
//       result,
//     },
//   });
// };

// module.exports = updateFavoriteContact;
