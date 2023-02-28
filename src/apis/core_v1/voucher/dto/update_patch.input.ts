export const updatePatchInput = (Joi) => ({
  _id: Joi.string().required(),

  title: Joi.string().required(),
});
