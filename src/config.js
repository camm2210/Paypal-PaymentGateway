const { config } = require("dotenv");

config();
const PAYPAL_API_CLIENT = process.env.PAYPAL_API_CLIENT;

const PAYPAL_API_SECRET = process.env.PAYPAL_API_SECRET;

const PAYPAL_API = process.env.PAYPAL_API;

module.exports = {
  PAYPAL_API,
  PAYPAL_API_CLIENT,
  PAYPAL_API_SECRET,
};
