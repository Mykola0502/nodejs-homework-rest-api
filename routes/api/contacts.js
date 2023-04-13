const express = require("express");

const { contacts: ctrlsContacts } = require("../../controllers");
const {
  // addContactValidation,
  validationBody,
  // updateValidation,
  // favoriteValidation,
  isValidId,
  ctrlWrapper,
  authenticate,
} = require("../../middlewares");
const {
  conactJoiSchemas,
  // JoiAddContactSchema,
  // JoiUpdateContactSchema,
  // JoiFavoriteContactSchema,
} = require("../../models");

const router = express.Router();

router.get("/", authenticate, ctrlWrapper(ctrlsContacts.getContacts));

router.get(
  "/:contactId",
  authenticate,
  isValidId,
  ctrlWrapper(ctrlsContacts.getContactById)
);

router.post(
  "/",
  authenticate,
  // addContactValidation(JoiAddContactSchema),
  validationBody(conactJoiSchemas.JoiAddContactSchema),
  ctrlWrapper(ctrlsContacts.addContact)
);

router.delete(
  "/:contactId",
  authenticate,
  isValidId,
  ctrlWrapper(ctrlsContacts.removeContactById)
);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validationBody(conactJoiSchemas.JoiUpdateContactSchema),
  // updateValidation(JoiUpdateContactSchema),
  ctrlWrapper(ctrlsContacts.updateContactById)
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  // favoriteValidation(JoiFavoriteContactSchema),
  validationBody(conactJoiSchemas.JoiFavoriteContactSchema),
  ctrlWrapper(ctrlsContacts.updateFavoriteContact)
);

module.exports = router;
