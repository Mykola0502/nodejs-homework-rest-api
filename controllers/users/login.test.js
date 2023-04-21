// - відповідь повина мати статус-код 200
// - у відповіді повинен повертатися токен
// - у відповіді повинен повертатися об'єкт user з 2 полями
//   email и subscription з типом даних String

/* eslint-disable no-undef */

const express = require("express");
const bcrypt = require("bcrypt");
const login = require("./login");
const { User } = require("../../models");

const app = express();
app.use(express.json());

describe("Login controller test", () => {
  const mEmail = "user@mail.com";
  const mPassword = "123456";

  const mReq = {
    body: {
      email: mEmail,
      password: mPassword,
    },
  };

  const mRes = jest.fn();

  const user = {
    email: mEmail,
    password: bcrypt.hashSync(mPassword, 10),
    subscription: "starter",
  };

  it("Response must have a status code of 200", async () => {
    jest.spyOn(User, "findOne").mockImplementationOnce(() => user);
    login(mReq, mRes).then(() => {
      expect(mRes.status).toBe(200);
    });
  });

  it("Response must return a token", async () => {
    jest.spyOn(User, "findOne").mockImplementationOnce(() => user);
    login(mReq, mRes).then(() => {
      expect(mRes.token).toBeDefined();
    });
  });

  it("Response should return an object with 2 fields (email and subscription) with the String data type", async () => {
    jest.spyOn(User, "findOne").mockImplementationOnce(() => user);
    login(mReq, mRes).then(() => {
      expect(typeof mRes.user.email).toBe("string");
      expect(typeof mRes.user.subscription).toBe("string");
    });
  });
});
