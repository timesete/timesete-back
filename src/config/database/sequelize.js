const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../../../.env') });
const { env } = require('../../../env');

module.exports = {
  username: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
  host: env.DB_HOST,
  // username: process.env.DB_USER,
  // password: process.env.DB_PASS,
  // database:
  //   process.env.NODE_ENV !== 'test'
  //     ? process.env.DB_NAME
  //     : `${process.env.DB_NAME}-test`,
  // host: process.env.DB_HOST,
  dialect: 'postgres',
  // protocol: 'postgres',
  // ssl: true,
  // dialectOptions: {
  //   ssl: {
  //     require: true,
  //     rejectUnauthorized: false,
  //   },
  // },
};
