const chalk = require("chalk");
const getNotes = require("./notes.js");
const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: 'string'
    },
    body: {
        describe: 'Note body',
        demandOption:true,
        type: 'string'
    }
  },
  handler: function (argv) {
    console.log("Title: " + argv.title);
    console.log("Body: " + argv.body);
  },
});

yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note");
  },
});

yargs.command({
  command: "list",
  describe: "List all notes",
  handler: function () {
    console.log("Listing all notes");
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing a note");
  },
});

// console.log(yargs.argv);
yargs.parse()