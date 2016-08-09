(function($){
	$(document).ready(function(){
		// Set the time at which the countdown expires.
		// var untilDate new Date(Year, Month - 1, Day)
		//-----------------------------------------------
		//var untilDate = new Date(2016, 5 - 1, 5);

		$(".countdown").countdown({
			until: 
				$.countdown.UTCDate( -5, 2016, 5-1, 5, 9), 
			format: 'dHMS',
			padZeroes: true
		});

	}); // End document ready

})(this.jQuery);