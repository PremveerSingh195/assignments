// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

let text = fs.readFileSync("a.txt", "utf-8", (err, data) => {
  if (err) {
    return;
  }
  console.log(data);
});

const text1 = text.trim().split(/\s+/).join(" ");

console.log(text1);

fs.writeFile("a.txt", text1, (err) => {
  if (err) {
    return;
  }

  console.log("file updated succesfully!");
});
