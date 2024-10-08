import Joi from "joi";

export const addBookValidator = Joi.object({
  title: Joi.string().required().min(5).max(200),
  Body: Joi.string().required().min(5).max(200),
  author: Joi.string().required(),
});

export const updateBookValidator = Joi.object({
  title: Joi.string().min(5).max(200),
  Body: Joi.string().min(5).max(200),
  author: Joi.string(),
});
