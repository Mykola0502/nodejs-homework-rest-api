const { User } = require("../../models");
const { RequestError, sendEmail } = require("../../helpers");

const { MAIL_USER, BASE_URL } = process.env;

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw RequestError(401, "Email not found");
  }

  if (user.verify) {
    throw RequestError(400, "Verification has already been passed");
  }

  const verifyEmail = {
    to: email,
    from: MAIL_USER,
    subject: "Verify email",
    html: `<a href="${BASE_URL}/api/users/verify/${user.verificationToken}">Click verify email</a>`,
  };

  await sendEmail(verifyEmail);

  res.json({
    message: "Verification email sent",
  });
};

module.exports = resendVerifyEmail;
