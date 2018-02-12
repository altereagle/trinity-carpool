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

public{
    private int time = 0;

    public int get24hrTime(){
        return time;
    }

    public int set24hrTime( int newTime ){
        this.time = newTime;
    }

    public int get12hrTime(){
        if( time - 12 < 0 ){
            return time;
        } else {
            return time - 12;
        }
    }

    public String get12hrPostfix(){
        if( hours - 12 < 0 ){
            return "AM";
        } else {
            return "PM";
        }
    }
}function updateClock() {
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


