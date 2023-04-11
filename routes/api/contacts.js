const express = require("express");

const { contacts: ctrlsContacts } = require("../../controllers");
const {
  // addContactValidation,
  validationBody,
  // updateValidation,
  // favoriteValidation,
  isValidId,
  ctrlWrapper,
} = require("../../middlewares");
const {
  conactJoiSchemas,
  // JoiAddContactSchema,
  // JoiUpdateContactSchema,
  // JoiFavoriteContactSchema,
} = require("../../models");

const router = express.Router();

router.get("/", ctrlWrapper(ctrlsContacts.getContacts));

router.get("/:contactId", isValidId, ctrlWrapper(ctrlsContacts.getContactById));

router.post(
  "/",
  // addContactValidation(JoiAddContactSchema),
  validationBody(conactJoiSchemas.JoiAddContactSchema),
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
  validationBody(conactJoiSchemas.JoiUpdateContactSchema),
  // updateValidation(JoiUpdateContactSchema),
  ctrlWrapper(ctrlsContacts.updateContactById)
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  // favoriteValidation(JoiFavoriteContactSchema),
  validationBody(conactJoiSchemas.JoiFavoriteContactSchema),
  ctrlWrapper(ctrlsContacts.updateFavoriteContact)
);

module.exports = router;
