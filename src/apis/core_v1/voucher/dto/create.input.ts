export const createInput = (Joi) => ({
  title: Joi.string().required(),

  content: Joi.string().required(),

  description: Joi.string().required(),

  discount: Joi.number().required(),

  quantity: Joi.number().required(),

  startTimeAt: Joi.string().required(),

  endTimeAt: Joi.string().required(),
});
