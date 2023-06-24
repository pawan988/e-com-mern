const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
    confirm_password: { type: String },
    phone: { type: String },
  },
  {
    collection: "users",
  }
);

module.exports = mongoose.model("users", userSchema);
