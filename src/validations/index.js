const { general } = require('./general.validation');
const { users } = require('./users.validation');
const { auth } = require('./auth.validation');
const { admin } = require('./admin.validation');
const { category } = require('./category.validation');
const { background } = require('./background.validation');
const { color } = require('./color.validation');
const { coverphoto } = require('./coverphoto.validation');
const { shape } = require('./shape.validation');

module.exports.validationSchemas = {
  general,
  users,
  auth,
  admin,
  background,
  category,
  color,
  coverphoto,
  shape,
};
