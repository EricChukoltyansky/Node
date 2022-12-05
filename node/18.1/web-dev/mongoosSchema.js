const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");

const productSchema = new mongoose.Schema("product", {
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  isActive: {
    type: Boolean,
    default: false,
    validate(value) {
      if (value !== false || value !== true) {
        throw new Error("isActive must be either true or false");
      }
    },
  },
  details: {
    description: {
      type: String,
      trim: true,
      minLenght: 10,
    },
    price: {
      type: Number,
      validate(value) {
        if (value < 0) {
          throw new Error("Must be a positive number");
        }
      },
    },
    discount: {
      type: Number,
      default: 0,
    },
    images: {
      type: Image,
    },
    phone: {
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

const pro1 = new User({
  name: "pro1",
  category: "category1",
  isActive: true,
  details: {
    price: 20,
    description: "something",
    phone: "0559544755",
  },
});
const pro2 = new User({
  name: "pro2",
  category: "category1",
  isActive: true,
  details: {
    price: 20,
    description: "something",
    phone: "0559544755",
  },
});
const pro3 = new User({
  name: "pro3",
  category: "category1",
  isActive: true,
  details: {
    price: 20,
    description: "something",
    phone: "0559544755",
  },
});

const Product = mongoose.model("products", userSchema);

Product.insertMany()
  .then(() => {
    console.log("Added successfuly");
  })
  .catch((err) => {
    console.log(err);
  });

const addUser = async (product) => {
  try {
    const newUser = await Product.create(product);
    await newUser.save();
  } catch (err) {
    console.log(err.message);
  }
};
