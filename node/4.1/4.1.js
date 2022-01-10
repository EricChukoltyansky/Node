const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "Add numbers",
  handler: function (argv) {
    console.log(argv.firstArg + argv.secondArg);
  },
  builder: {
    firstArg: {
      describe: "First arg",
      demandOption: true,
      type: "number",
    },
    secondArg: {
      describe: "First arg",
      demandOption: true,
      type: "number",
    },
  },
});

yargs.command({
  command: "multiply",
  describe: "Multiply numbers",
  handler: function (argv) {
    console.log(argv.firstArg * argv.secondArg);
  },
  builder: {
    firstArg: {
      describe: "First arg",
      demandOption: true,
      type: "number",
    },
    secondArg: {
      describe: "First arg",
      demandOption: true,
      type: "number",
    },
  },
});

yargs.command({
  command: "divide",
  describe: "Divide numbers",
  handler: function (argv) {
    console.log(argv.firstArg / argv.secondArg);
  },
  builder: {
    firstArg: {
      describe: "First arg",
      demandOption: true,
      type: "number",
    },
    secondArg: {
      describe: "First arg",
      demandOption: true,
      type: "number",
    },
  },
});

yargs.command({
  command: "sub",
  describe: "Subtract numbers",
  handler: function (argv) {
    console.log(argv.firstArg - argv.secondArg);
  },
  builder: {
    firstArg: {
      describe: "First arg",
      demandOption: true,
      type: "number",
    },
    secondArg: {
      describe: "First arg",
      demandOption: true,
      type: "number",
    },
  },
});

yargs.command({
  command: "pow",
  describe: "Powered numbers",
  handler: function (argv) {
    console.log(Math.pow(argv.firstArg, argv.secondArg));
  },
  builder: {
    firstArg: {
      describe: "First arg",
      demandOption: true,
      type: "number",
    },
    secondArg: {
      describe: "First arg",
      demandOption: true,
      type: "number",
    },
  },
});

// console.log(yargs.argv);
yargs.parse();
