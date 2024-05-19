const express = require("express");
const {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/User");
const { uploadImage } = require("../multer/uploadsConfig.js");
const router = express.Router();

router.post("/api/addUser", uploadImage().single("photo"), createUser);
router.get("/", getUsers);
router.get("/:id", getUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
