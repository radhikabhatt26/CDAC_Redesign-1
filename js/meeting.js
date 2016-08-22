var tpj=jQuery;               // MAKE JQUERY PLUGIN CONFLICTFREE
tpj.noConflict();

tpj(document).ready(function() {
    tpj('#headerSection').parallax('50%', .60);
});

var $button2015 = tpj('#2015');
var $button2016 = tpj('#2016');
var $meetingPageInfo = tpj('#meetingPageInfo');
var $meeting2015Info = tpj('#meeting2015Info');
var $meeting2016Info = tpj('#meeting2016Info');

$button2015.click( function(e) {
    e.preventDefault();
    $meeting2016Info.css('display', 'none');
    $meeting2015Info.css('display', 'block');
});

$button2016.click( function(e) {
    e.preventDefault();
    $meeting2016Info.css('display', 'block');
    $meeting2015Info.css('display', 'none');

})
