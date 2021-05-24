const yup = require('yup');

const create = {
  body: yup.object().shape({
    photoLink: yup.string().required(),
  }),
};
const update = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
  body: yup.object().shape({
    photoLink: yup.string().required(),
  }),
};

module.exports.coverphoto = {
  create,
  update,
};
