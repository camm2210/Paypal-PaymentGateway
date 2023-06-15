const axios = require("axios");
const {
  PAYPAL_API,
  PAYPAL_API_CLIENT,
  PAYPAL_API_SECRET,
} = require("../config");

const createOrderController = async (req, res) => {
  const order = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: "100.20",
        },
      },
      {
        amount: {
          currency_code: "USD",
          value: "305.80",
        },
      },
    ],
    application_context: {
      brand_name: "WorkAway",
      landing_page: "LOGIN",
      user_action: "PAY_NOW",
      return_url: "http://localhost:3001/capture",
      cancel_url: "http://localhost:3001/cancel",
    },
  };

  const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders`, order, {
    auth: {
      username: PAYPAL_API_CLIENT,
      password: PAYPAL_API_SECRET,
    },
  });
  console.log(response);
  res.send(response);
};

const cancelOrderController = (req, res) => {
  res.send("canceling order");
};

const captureOrderController = (req, res) => {
  res.send("capturing order");
};

module.exports = {
  cancelOrderController,
  captureOrderController,
  createOrderController,
};
