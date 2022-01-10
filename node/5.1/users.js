const fs = require("fs");
const chalk = require("chalk");
const uniqid = require("uniqid");

const addUsers = function (id, name, email) {
  const users = loadUsers();
  const duplicateUsers = users.filter(function (user) {
    return user.title === title;
  });

  if (duplicateUsers.length === 0) {
    users.push({
      id: uniqid(),
      name,
      email,
    });
    saveUsers(users);
    console.log("New user added!");
  } else {
    console.log("User already added!");
  }
};

const removeUsers = function (id) {
  const users = loadUsers();
  const keptUsers = users.filter(function (user) {
    return user.id !== id;
  });

  if (users.length > keptUsers.length) {
    console.log(chalk.green.inverse("User removed"));
    saveUsers(keptUsers);
  } else {
    console.log(chalk.red.inverse("No user found"));
  }
};

const saveUsers = function (users) {
  const dataJSON = JSON.stringify(users);
  fs.writeFileSync("users.json", dataJSON);
};

const loadUsers = function () {
  try {
    const dataBuffer = fs.readFileSync("users.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = { addUsers, removeUsers };
