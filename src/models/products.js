const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  images: { type: [String], required: true },
  price: { type: Number, required: true },
  salePrice: { type: Number },
  salePriceDate: { type: Date },
  isTrending: { type: Boolean, default: false },
  units: { type: Number, required: true },
  catID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
