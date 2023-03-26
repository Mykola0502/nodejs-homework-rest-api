const express = require("express");

const { contacts: ctrlsContacts } = require("../../controllers");
const { validation, ctrlWrapper } = require("../../middlewares");
const { contactSchema } = require("../../schemas");

const router = express.Router();

router.get("/", ctrlWrapper(ctrlsContacts.getContacts));

router.get("/:contactId", ctrlWrapper(ctrlsContacts.getContactById));

router.post(
  "/",
  validation(contactSchema),
  ctrlWrapper(ctrlsContacts.addContact)
);

router.delete("/:contactId", ctrlWrapper(ctrlsContacts.removeContactById));

router.put(
  "/:contactId",
  validation(contactSchema),
  ctrlWrapper(ctrlsContacts.updateContactById)
);

module.exports = router;
