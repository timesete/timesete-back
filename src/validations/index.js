const { auth } = require('./auth.validation');
const { admin } = require('./admin.validation');

module.exports.validationSchemas = {
  auth,
  admin,
};
