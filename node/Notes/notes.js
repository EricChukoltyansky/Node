const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
  return "Your notes...";
};

const addNotes = function (title, body) {
  const notes = loadNotes();
  //   const duplicateNotes = notes.filter(function (note) {
  //     return note.title === title;
  //   });
  const duplicateNotes = notes.find((note) => {
    note.title === title;
  });
  if (!duplicateNotes) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log("New note added!");
  } else {
    console.log("Note title taken!");
  }
};

const readNotes = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => {
    note.title === title;
  });

  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("Note not found"));
  }
};

const listNotes = () => {
  console.log(chalk.inverse("Your Notes"));
  const notes = loadNotes();

  notes.forEach((note) => {
    console.log(note.title);
  });
};

const removeNotes = function (title) {
  const notes = loadNotes();
  const keptNotes = notes.filter(function (note) {
    return note.title !== title;
  });

  if (notes.length > keptNotes.length) {
    console.log(chalk.greenn.inverse("Note removed"));
    saveNotes(keptNotes);
  } else {
    console.log(chalk.red.inverse("No note found"));
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = { getNotes, addNotes, removeNotes, listNotes, readNotes };
