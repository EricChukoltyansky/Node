const chalk = require("chalk");
const users = require("./users.js");
const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "Add a new user",
  builder: {
    id: {
      describe: "User id",
      demandOption: false,
      type: "string",
    },
    name: {
      describe: "User name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "User email",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    users.addUsers(argv.id, argv.name, argv.email);
  },
});

// yargs.command({
//   command: "read",
//   describe: "Read a note",
//   handler: function () {
//     console.log("Reading a note");
//   },
// });

// yargs.command({
//   command: "list",
//   describe: "List all notes",
//   handler: function () {
//     console.log("Listing all notes");
//   },
// });

yargs.command({
  command: "remove",
  describe: "Remove a user",
  builder: {
    id: {
      describe: "User id",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    users.removeUsers(argv.id);
  },
});

// console.log(yargs.argv);
yargs.parse();
