const yup = require('yup');

const create = {
  body: yup.object().shape({
    name: yup.string().required(),
  }),
};
const update = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
  body: yup.object().shape({
    name: yup.string().required(),
  }),
};

module.exports.color = {
  create,
  update,
};
