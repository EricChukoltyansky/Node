const mongoose = require("mongoose");
const validator = require("validator");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
  },
  details: {
    description: {
      type: String,
      required: true,
      minLength: 10,
    },
    price: {
      type: Number,
      required: true,
      min: 1,
    },
    discount: {
      type: Number,
      default: 0,
    },
    images: {
      type: Array,
    },
    phoneNumber: {
      type: String,
      validate(value) {
        if (!validator.isMobilePhone(value, ["he-IL"])) {
          throw new Error("Invalid Phone Number");
        }
      },
      required: true,
    },
  },
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
