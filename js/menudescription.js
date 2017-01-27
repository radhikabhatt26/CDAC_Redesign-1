(function($) {
        /* MENU DESCRIPTION MAKER*/
        var wapoWindowWidth = $(window).width();
        // fetch titles and add descriptions
        $('.content > #nav > li > a').each(function(index, value) {
            var mainMenuTitle = $(value).attr('title');
            var linkParent = $(value).parent();
            var linkParentTitle = $(value).text();

            $('<a><img src="images/' + linkParentTitle + '_blue.png"></a>').prependTo(value);

            $('<p>', {
                'class': 'tip hidden-phone hidden-tablet',
                'text': mainMenuTitle,
            }).appendTo(linkParent);
            //Added by KC								
            //$('<div class="mainNavImage"><img src="/sites/default/files/field/image/' + linkParentTitle + '_blue.png"></div>').prependTo(linkParent);

            //$('<img>', {
            //	'class' : linkParentTitle,
            //    'src' : '/sites/default/files/field/image/' + linkParentTitle + '_blue.png'
            //}).prependTo(linkParent);
            });


            /* END MENU DESCRIPTION MAKER*/
})(jQuery);