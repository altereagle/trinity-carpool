// This is a list of "global variables"
/* global moment, $ */
/*
var checkIn = document.getElementById("check-in");
var checkOut = document.getElementById("check-out");
var checkingOut = addEventListener("click", checkOut);
var checkingIn = addEventListener("click", checkIn);
if (checkingIn){
    alert("check in clicked!");
}
if (checkingOut){
    alert("check out clicked!");
}
*/

document.querySelector("#check-in").addEventListener("click", () => {
  console.log(`You're checked in!`);
});
document.querySelector("#check-out").addEventListener("click", () => {
  console.log(`You're checked out!`);
});
/*
$(function(){
    $("#checkIn").click(function(){
        alert('clicked!');
    });
});
*/


function updateClock() {
  var now = moment(),
      second = now.seconds() * 6,
      minute = now.minutes() * 6 + second / 60,
      hour = ((now.hours() % 12) / 12) * 360 + 90 + minute / 12;
  $('#hour').css("transform", "rotate(" + hour + "deg)");
  $('#minute').css("transform", "rotate(" + minute + "deg)");
  $('#second').css("transform", "rotate(" + second + "deg)");
}
function timedUpdate () {
  updateClock();
  setTimeout(timedUpdate, 1000);
}
timedUpdate();

// Function to change the content of t2
function modifyText() {
  var t2 = document.getElementById("t2");
  if (t2.firstChild.nodeValue == "three") {
    t2.firstChild.nodeValue = "two";
  } else {
    t2.firstChild.nodeValue = "three";
  }
}

// add event listener to table
var el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);
