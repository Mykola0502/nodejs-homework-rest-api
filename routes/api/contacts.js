const express = require("express");
// const createError = require("http-errors");
const { NotFound } = require("http-errors");

const contacts = require("../../models/contacts");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await contacts.listContacts();
    res.json({
      status: "success",
      code: 200,
      data: {
        contacts: result,
      },
    });
  } catch (error) {
    next(error);

    // res.status(500).json({
    //   status: "error",
    //   code: 500,
    //   message: "Server error",
    // });
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    // console.log(contactId);

    const result = await contacts.getContactById(contactId);
    if (!result) {
      /**
       *    відповідь на помилку 404 з використанням пакету http-errors
       */
      // //   через NotFound
      throw new NotFound("Not found");

      // //   через createError
      // throw createError(404, "Not found");

      /**
       *     відповідь на помилку 404 з генеруванням помилки
       */
      //   const error = new Error("Not found");
      //   error.status = 404;
      //   throw error;

      /**
       *   звичайна відповідь на помилку 404
       */
      // res.status(404).json({
      //   status: "error",
      //   code: 404,
      //   message: "Not found",
      // });
      // return;
    }
    res.json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
