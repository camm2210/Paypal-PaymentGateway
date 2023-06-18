const { config } = require("dotenv");

config();
const PAYPAL_API_CLIENT =
  "AdiNb6McbAMTW-_Q6gDXi6R-NKPuo6adwdDY7U_a5biMXafZcYdgvf4kC533mTn8or1KeY-rq-YqO2gH";

const PAYPAL_API_SECRET =
  "EG-Fc_EeXqbYZA8R0FMLxGifVzjLSBaCojFEjUccSd7pqAofsNhKOr2kV4_7tQaEHW84dWm2Qyzau4XE";

const PAYPAL_API = "https://api-m.sandbox.paypal.com";

module.exports = {
  PAYPAL_API,
  PAYPAL_API_CLIENT,
  PAYPAL_API_SECRET,
};
