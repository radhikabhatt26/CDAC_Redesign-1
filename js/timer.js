(function($) {
    $(function() {
        $('#iview').iView({
            pauseTime: 7000,
            pauseOnHover: true,
            directionNavHoverOpacity: 0,
            timer: 'Bar',
            timerDiameter: '15%',
            timerPadding: 0,
            timerStroke: 7,
            timerBarStroke: 0,
            timerColor: '#FFF',
            timerPosition: 'bottom-right',
            fx: 'strip-up-down, strip-down-left, zigzag-drop-top, right-curtain, block-expand',
        });
    });
})(jQuery);