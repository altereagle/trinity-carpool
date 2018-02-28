// This is a list of "global variables"
/* global moment, $ */

document.querySelector("#check-in").addEventListener("click", () => {
  console.log(`You're checked in!`);
});
document.querySelector("#check-out").addEventListener("click", () => {
  console.log(`You're checked out!`);
});

// this adds  a clock 
//$('#clock').fitText(1.3);

function update() {
  $('#clock').html(moment().format('D. MMMM YYYY H:mm:ss'));
}

setInterval(update, 1000); 