const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchma = new Schema(
  {
    name: { type: String },
    price: { type: String },
    detail: { type: String },
  },
  {
    collection: "products",
  }
);

module.exports = mongoose.model("products", productsSchma);
