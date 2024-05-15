const express = require("express");
const router = express.Router();
const { createOrder, fetchOrders, updateOrder,  deleteOrder, getOrder } = require("../controllers/orderController");

router.post("/order/create", createOrder);
router.get("/order", fetchOrders);
router.get("/order/:", getOrder);
router.patch("/order/:", updateOrder);
router.delete("/order/:", deleteOrder);

module.exports = router;
