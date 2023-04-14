const express = require("express");

const { contacts: ctrlsContacts } = require("../../controllers");
const {
  validationBody,
  isValidId,
  ctrlWrapper,
  authenticate,
} = require("../../middlewares");
const { conactJoiSchemas } = require("../../models");

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
  ctrlWrapper(ctrlsContacts.updateContactById)
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validationBody(conactJoiSchemas.JoiFavoriteContactSchema),
  ctrlWrapper(ctrlsContacts.updateFavoriteContact)
);

module.exports = router;
