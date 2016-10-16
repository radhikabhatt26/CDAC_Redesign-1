$(document).ready(function() {

       // set the date we're counting down to
    var target_date = new Date('October 28, 2016').getTime();

    // variables for time units
    var days, hours, minutes, seconds;

    // get tag element
    var countdown = document.getElementById('countdown');

    // update the tag with id "countdown" every 1 second
    setInterval(function() {

        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;

        if (seconds_left <= 0) {
            seconds_left = 0;
        } else {
            // do some time calculations
            days = parseInt(seconds_left / 86400);
            seconds_left = seconds_left % 86400;

            hours = parseInt(seconds_left / 3600);
            seconds_left = seconds_left % 3600;

            minutes = parseInt(seconds_left / 60);
            seconds = parseInt(seconds_left % 60);


            // format countdown string + set tag value
            countdown.innerHTML = '<span class="days"><b>' + days + '</b> days </span> <span class="hours"><b>' + hours + '</b> hours </span> <span class="minutes"><b>' + minutes + '</b> minutes </span> <span class="seconds"><b>' + seconds + '</b> seconds </span>';

        }

    }, 1000);
    
});

 