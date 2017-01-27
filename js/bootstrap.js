<!-- Bootstrap scripts -->
    (function($) {
        $(document).ready(function() {
            $("[rel=tooltip]").tooltip();
            //$('.carousel').carousel({
            //		scroll: 4
            //});
            $("a[rel=popover]").popover({
                html: true
            });
        });

    })(jQuery);