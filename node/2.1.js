const fs = require("fs");

fs.writeFileSync("notes.txt", "My name is Electra");

function callback(err) {
  if (err) throw err;
  console.log("source.txt was copied to destination.txt");
}
function callbackRename(err) {
  if (err) throw err;
  console.log("source.txt was copied to destination.txt");
}

fs.copyFile("notes.txt", "copiedNotes.txt", callback);
fs.rename("copiedNotes.txt", "newCopiedNotes.txt", callbackRename);
