const express = require("express");
const { createPayment, getPayment } = require("../controllers/payment");
const router = express.Router();

router.post("/payment/create", createPayment);
router.get("/payment", getPayment);

module.exports = router;
