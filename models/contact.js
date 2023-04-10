const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      // type: String,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    // date: {
    //   type: String,
    //   // 16-10-2009
    //   match: /^\d{2}-\d{2}-\d{4}$/,
    //   required: true,
    // },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handleMongooseError);

const JoiAddContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  // favorite: Joi.boolean(),
  favorite: Joi.number(),

  // date: Joi.string()
  //   .pattern(/^\d{2}-\d{2}-\d{4}$/)
  //   .required(),
});

const JoiUpdateContactSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().email(),
  phone: Joi.string(),
  // favorite: Joi.boolean(),
  favorite: Joi.number(),
}).min(1);

// const JoiUpdateContactSchema = Joi.object({
//   name: Joi.string(),
//   email: Joi.string().email(),
//   phone: Joi.string(),
//   favorite: Joi.boolean(),
// });

const JoiFavoriteContactSchema = Joi.object({
  // favorite: Joi.number().required(),
  // favorite: Joi.boolean().required(),
  favorite: Joi.boolean().truthy("1").falsy("0").required(),
});

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
  JoiAddContactSchema,
  JoiUpdateContactSchema,
  JoiFavoriteContactSchema,
};
