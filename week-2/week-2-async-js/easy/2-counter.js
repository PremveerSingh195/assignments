// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let timer = 0;

function counter() {
  timer++;

  console.log(timer);

  setTimeout(counter, 1000);
}

// (Hint: setTimeout);

counter();
