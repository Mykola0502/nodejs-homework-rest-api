const express = require("express");

const { contacts: ctrlsContacts } = require("../../controllers");
const {
  // addvalidation,
  // updatevalidation,
  ctrlWrapper,
} = require("../../middlewares");
// const {
//   JoiAddContactSchema,
//   JoiUpdateContactSchema,
// } = require("../../models/contact");

const router = express.Router();

router.get("/", ctrlWrapper(ctrlsContacts.getContacts));

router.get("/:contactId", ctrlWrapper(ctrlsContacts.getContactById));

// router.post(
//   "/",
//   addvalidation(JoiAddContactSchema),
//   ctrlWrapper(ctrlsContacts.addContact)
// );

// router.delete("/:contactId", ctrlWrapper(ctrlsContacts.removeContactById));

// router.put(
//   "/:contactId",
//   updatevalidation(JoiUpdateContactSchema),
//   ctrlWrapper(ctrlsContacts.updateContactById)
// );

module.exports = router;
