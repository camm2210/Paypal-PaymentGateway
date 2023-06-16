const axios = require("axios");
const {
  PAYPAL_API,
  PAYPAL_API_CLIENT,
  PAYPAL_API_SECRET,
} = require("../config");

const createOrderController = async (req, res) => {
  try {
    const order = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: "100.20",
          },
          description: "objeto", //necessary
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

    const response = await axios.post(
      `${PAYPAL_API}/v2/checkout/orders`,
      order,
      {
        auth: {
          username: PAYPAL_API_CLIENT,
          password: PAYPAL_API_SECRET,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const captureOrderController = async (req, res) => {
  const { token } = req.query;
  const response = await axios.post(
    `${PAYPAL_API}/v2/checkout/orders/${token}/capture`,
    {},
    {
      auth: {
        username: PAYPAL_API_CLIENT,
        password: PAYPAL_API_SECRET,
      },
    }
  );
  console.log(response.data);
  res.send("capturing order");
};

const cancelOrderController = (req, res) => {
  res.send("canceling order");
};

module.exports = {
  cancelOrderController,
  captureOrderController,
  createOrderController,
};
