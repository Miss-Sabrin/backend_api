const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, required: false, default: "user" },
    photo: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
