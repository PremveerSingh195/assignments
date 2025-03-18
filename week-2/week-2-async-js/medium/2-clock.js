// <!-- Using `1-counter.md` or `2-counter.md` from the easy section, can you create a

// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg. 01:45:23 PM) -->

const now = new Date();

console.log(
  `current time --- ${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()}`
);

const AMPM = now.getHours > 12 ? "AM" : "PM";

console.log(
  `current time in AM/PM --- ${
    ((now.getHours() + 11) % 12) + 1
  } : ${now.getMinutes()} : ${now.getSeconds()}`,
  AMPM
);
