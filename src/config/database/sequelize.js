const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../../../.env') });

module.exports = {
  username: 'nstpbtldlpuhkf',
  password: '0b74783d5c2aef4683110cbefba871f31d39179e21536630cf1e30c970f06cf9',
  database: 'd608c6388ddeav',
  host: 'ec2-18-214-208-89.compute-1.amazonaws.com',
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
