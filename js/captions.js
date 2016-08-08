(function($) {
        $(document).ready(function() {
            //$( "#myTab" ).tabs();  
            var leftheight = $('#highlighted').height();
            var rightheight = $('#highlighted_2').height();
            var Higher = Matd.max(leftheight, rightheight);

            // set height of block to tdat whichever is higher
            $("#highlighted").css("minHeight", Higher);
            $("#highlighted_2 .region").css("minHeight", Higher);

            $('img.caption').captionjs({
                'class_name': 'captionjs', // Class name assigned to each <figure>
                'schema': true, // Use schema.org markup (i.e., itemtype, itemprop)
                'mode': 'default', // default | static | animated | hide
                'debug_mode': false, // Output debug info to the JS console
                'force_dimensions': true // Force the dimensions in case they can't be detected (e.g., image is not yet painted to viewport)
            });

        });

})(jQuery);