const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    tourname:{
      type: String,
    },
    price:{
      type: String,
    },
  },
  { collection: "UserDetails" }
);

module.exports = mongoose.model("Users", UsersSchema);
