const express = require("express");
const { users: ctrlsUsers } = require("../../controllers");

const {
  validationBody,
  ctrlWrapper,
  authenticate,
  upload,
} = require("../../middlewares");
const { userJoiSchemas } = require("../../models");

const router = express.Router();

router.post(
  "/register",
  validationBody(userJoiSchemas.JoiUserSchema),
  ctrlWrapper(ctrlsUsers.register)
);
router.get("/verify/:verificationToken", ctrlWrapper(ctrlsUsers.verifyEmail));

router.post(
  "/verify",
  validationBody(userJoiSchemas.JoiUserEmailSchema),
  ctrlWrapper(ctrlsUsers.resendVerifyEmail)
);

router.post(
  "/login",
  validationBody(userJoiSchemas.JoiUserSchema),
  ctrlWrapper(ctrlsUsers.login)
);

router.get("/current", authenticate, ctrlWrapper(ctrlsUsers.getCurrent));

router.post("/logout", authenticate, ctrlWrapper(ctrlsUsers.logout));

router.patch(
  "/",
  authenticate,
  validationBody(userJoiSchemas.JoiUserSubscriptionSchema),
  ctrlWrapper(ctrlsUsers.updateSubscription)
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlsUsers.updateAvatar
);

module.exports = router;
