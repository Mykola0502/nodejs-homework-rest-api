const express = require("express");
const { users: ctrlsUsers } = require("../../controllers");

const { validationBody, ctrlWrapper } = require("../../middlewares");
const { userJoiSchemas } = require("../../models");

const router = express.Router();

router.post(
  "/register",
  validationBody(userJoiSchemas.JoiUserSchema),
  ctrlWrapper(ctrlsUsers.register)
);

router.post(
  "/login",
  validationBody(userJoiSchemas.JoiUserSchema),
  ctrlWrapper(ctrlsUsers.login)
);

module.exports = router;
