const express = require("express");
const paymentRoutes = require("../src/routes/payment");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));

app.use(paymentRoutes);

app.listen(3001);
console.log("Listening on port", 3001);
