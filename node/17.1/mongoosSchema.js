const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");

const User = mongoose.model("User", {
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
      minLenght: 10
      },
    },
    price: {
        type: Number,
        validate(value) {
            if(value < 0) {
                throw new Error('Must be a positive number')
            }
        }
    },
    discount: {
        type: Number,
        default: 0
    },
    images: {
        []
    }
  },
});

const me = new User({
  name: "Andrew",
  age: 26,
  email: "mike@",
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch((error) => {
    console.log("Error!", error);
  });
