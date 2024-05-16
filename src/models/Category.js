const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  photo: { type: String },
});


module.exports=mongoose.model("Category",CategorySchema)
// const Category = mongoose.model("Category", CategorySchema);
// module.exports = Category;
