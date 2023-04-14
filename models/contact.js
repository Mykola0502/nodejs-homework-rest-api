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
});

const JoiUpdateContactSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().email(),
  phone: Joi.string(),
  // favorite: Joi.boolean(),
  favorite: Joi.number(),
}).min(1);

const JoiFavoriteContactSchema = Joi.object({
  // favorite: Joi.number().required(),
  // favorite: Joi.boolean().required(),
  favorite: Joi.boolean().truthy("1").falsy("0").required(),
});

const conactJoiSchemas = {
  JoiAddContactSchema,
  JoiUpdateContactSchema,
  JoiFavoriteContactSchema,
};

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
  conactJoiSchemas,
};
