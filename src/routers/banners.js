const express = require("express");
const { createBanner,  fetchBanner } = require("../controllers/banners");
const router = express.Router();

router.post("/banner/create", createBanner);
router.get("/banner", fetchBanner);

module.exports = router;
