const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect(
  "mongodb://localhost:27017/testdb",
  () => {
    console.log("Connected");
  },
  (e) => console.error(e)
);

run();

async function run() {
  try {
    const user = await User.create({
      name: "Kyle",
      age: 26,
      
      hobbies: ["Weight lifting", "Bowling"],
      address: {
        street: "Main St",
      },
    });
    //   same as below
    //   const user = new User({ name: "Kyle", age: 26 });
    //   await user.save();
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}
