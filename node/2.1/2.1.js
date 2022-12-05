const fs = require("fs");
const path = require("path");

fs.writeFileSync("notes.txt", "My name is Electra");

function callback(err) {
  if (err) throw err;
  console.log("source.txt was copied to destination.txt");
}
function callbackRename(err) {
  if (err) throw err;
  console.log("source.txt was copied to destination.txt");
}

// const directoryPath = path.join(__dirname, "node");
fs.readdir("./", function (err, files) {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  files.forEach(function (file) {
    console.log(file);
  });
});

// fs.copyFile("notes.txt", "copiedNotes.txt", callback);

// fs.rename("copiedNotes.txt", "newCopiedNotes.txt", callbackRename);

const files = fs.readdirSync(__dirname);
files.forEach((file) => {
  console.log(file);
});
