// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout);

let counter = 0;

const updateCounter = () => {
  if (counter >= 15) {
    return null;
  } else {
    counter++;
    setTimeout(updateCounter, 1000);
    console.log(counter);
  }
};

updateCounter();
