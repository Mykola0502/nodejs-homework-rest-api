const express = require("express");

const { contacts: ctrlsContacts } = require("../../controllers");
const {
  addValidation,
  updateValidation,
  favoriteValidation,
  isValidId,
  ctrlWrapper,
} = require("../../middlewares");
const {
  JoiAddContactSchema,
  JoiUpdateContactSchema,
  JoiFavoriteContactSchema,
} = require("../../models/contact");

const router = express.Router();

router.get("/", ctrlWrapper(ctrlsContacts.getContacts));

router.get("/:contactId", isValidId, ctrlWrapper(ctrlsContacts.getContactById));

router.post(
  "/",
  addValidation(JoiAddContactSchema),
  ctrlWrapper(ctrlsContacts.addContact)
);

router.delete(
  "/:contactId",
  isValidId,
  ctrlWrapper(ctrlsContacts.removeContactById)
);

router.put(
  "/:contactId",
  isValidId,
  updateValidation(JoiUpdateContactSchema),
  ctrlWrapper(ctrlsContacts.updateContactById)
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  favoriteValidation(JoiFavoriteContactSchema),
  ctrlWrapper(ctrlsContacts.updateFavoriteContact)
);

module.exports = router;
