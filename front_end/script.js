// This is a list of "global variables"
/* global moment, $ */

document.querySelector("#check-in").addEventListener("click", () => {
  console.log(`You're checked in!`);
});
document.querySelector("#check-out").addEventListener("click", () => {
  console.log(`You're checked out!`);
});

// This function updates the clock by changing the css
function updateClock() {
  // This is something from momentjs, i think it gets the time?
  var now = moment(),
      second = now.seconds() * 6,
      minute = now.minutes() * 6 + second / 60,
      hour = ((now.hours() % 12) / 12) * 360 + 90 + minute / 12;
  
  // These are the elements that are changed using jquery
  $('#hour').css("transform", "rotate(" + hour + "deg)");
  $('#minute').css("transform", "rotate(" + minute + "deg)");
  $('#second').css("transform", "rotate(" + second + "deg)");
}

// This is a function that is run every second
function timedUpdate() {
  updateClock();
  setTimeout(timedUpdate, 1000);
}

// This starts the function that runs every second
timedUpdate();