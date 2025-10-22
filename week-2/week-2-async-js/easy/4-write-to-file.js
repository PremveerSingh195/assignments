// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

const content = "hi i am writing some text in file";

fs.writeFile("output.txt", content, (err) => {
  if (err) {
    console.error("Error in writing file", err);
    return;
  }

  console.log("file written suceessfully !");
});

console.log("this line runs next");
