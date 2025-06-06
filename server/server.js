const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT || 5001;
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.use(
  cors({
    origin: ["https://smartbazaar.vercel.app"],
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, "..", "client", "dist")));

// app.get('/*', (req, res) => {
// 	res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
// 		if (err) {
// 			console.error('Error sending file:', err);
// 		}
// 	});
// });

app.post("/pay", async (req, res) => {
  console.log(req.body.token);
  await Stripe.charges.create({
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  });
});

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
