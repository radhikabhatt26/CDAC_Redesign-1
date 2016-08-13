 <!--portfolio hover/colorbox styles-->
    (function($) {
        $(document).ready(function() {


            $('.portfolio-hover').each(function() {

                /* move this in image container */
                var portolioImageContainer = $(this).siblings('.views-field ').find('.tdumbnail .portfolio-image');
                $(this).appendTo(portolioImageContainer);

                /* add styles */
                var portolioImageContainerHeight = $(this).parent().height();
                var portolioImageContainerwidth = $(this).parent().width();

                /* set width and height 
                $(this).css({
                	width: portolioImageContainerwidth,
                	height: portolioImageContainerHeight,
                })
                */
            });
        });
    })(jQuery);
    