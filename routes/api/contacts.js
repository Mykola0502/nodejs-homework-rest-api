const express = require("express");

const { contacts: ctrlsContacts } = require("../../controllers");
const {
  addvalidation,
  updatevalidation,
  ctrlWrapper,
} = require("../../middlewares");
const schema = require("../../schemas");

const router = express.Router();

router.get("/", ctrlWrapper(ctrlsContacts.getContacts));

router.get("/:contactId", ctrlWrapper(ctrlsContacts.getContactById));

router.post(
  "/",
  addvalidation(schema.addContactSchema),
  ctrlWrapper(ctrlsContacts.addContact)
);

router.delete("/:contactId", ctrlWrapper(ctrlsContacts.removeContactById));

router.put(
  "/:contactId",
  updatevalidation(schema.updateContactSchema),
  ctrlWrapper(ctrlsContacts.updateContactById)
);

module.exports = router;
