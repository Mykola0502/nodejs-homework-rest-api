const nodemailer = require("nodemailer");
require("dotenv").config();

const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASSWORD } = process.env;

const nodemailerConfig = {
  host: MAIL_HOST,
  port: MAIL_PORT,
  sequre: true,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
};

const sendEmail = (data) => {
  const transporter = nodemailer.createTransport(nodemailerConfig);

  transporter
    .sendMail(data)
    .then(() => console.log("Email send success"))
    .catch((err) => console.log(err.message));
};

module.exports = sendEmail;
