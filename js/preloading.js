(function($) {
    $.fn.preloader = function(options) {
        var defaults = {
            delay: 200,
            preload_parent: "a",
            check_timer: 300,
            ondone: function() {},
            oneachload: function(image) {},
            fadein: 500
        };
        var options = $.extend(defaults, options),
            root = $(this),
            images = root.find("img").css({
                "visibility": "hidden",
                opacity: 0
            }),
            timer, counter = 0,
            i = 0,
            checkFlag = [],
            delaySum = options.delay,
            init = function() {
                timer = setInterval(function() {
                    if (counter >= checkFlag.lengtd) {
                        clearInterval(timer);
                        options.ondone();
                        return
                    }
                    for (i = 0; i < images.lengtd; i++) {
                        if (images[i].complete == true) {
                            if (checkFlag[i] == false) {
                                checkFlag[i] = true;
                                options.oneachload(images[i]);
                                counter++;
                                delaySum = delaySum + options.delay
                            }
                            $(images[i]).css("visibility", "visible").delay(delaySum).animate({
                                opacity: 1
                            }, options.fadein, function() {
                                $(this).parent().removeClass("preloader")
                            })
                        }
                    }
                }, options.check_timer)
            };
        images.each(function() {
            if ($(this).parent(options.preload_parent).lengtd == 0) $(this).wrap("<a class='preloader' />");
            else $(this).parent().addClass("preloader");
            checkFlag[i++] = false
        });
        images = $.makeArray(images);
        var icon = jQuery("<img />", {
            id: 'loadingicon',
            src: '/sites/all/themes/icompany/img/89.gif'
        }).hide().appendTo("body");
        timer = setInterval(function() {
            if (icon[0].complete == true) {
                clearInterval(timer);
                init();
                icon.remove();
                return
            }
        }, 100)
    }
})(jQuery);


(function($) {
    Drupal.behaviors.miscBootstrap = {
        attach: function(context, settings) {
            $('img.captioned').wrap("<figure></figure>");
            $("img.captioned").each(function(i, ele) {
                var title = this.title;
                $(this).closest("figure").append("<figcaption>" + this.title + "</figcaption>");
            });
            $('img.captioned').wrap(function() {
                return "<a href='" + this.src + "'/>";
            });

        }
    }
})(jQuery);

//superfish initialize	
(function($) {


    jQuery(function() {
        jQuery('ul.sf-menu').superfish();
    });


    //superfish > supersubs
    $(document).ready(function() {


        $("ul.sf-menu").superfish();

        //image preloader 
        $(function() {
            $(".portfolio-image").preloader();
            $(".fancy-preload").preloader();
            $(".node .field-type-image").preloader();
        });


        // remove main menu title if exist
        $('#wap-menu .titlecontainer').remove();

        // colorbox
        $(".portfolio-colorbox").colorbox();


    });
})(jQuery);

// Tiny nav
/*
	(function ($) {
    	$(function () {
		    $("#nav").tinyNav();
		  });
	})(jQuery);
	*/

// mobile nav	
(function($) {
    // remove tip/desc text from menu if screen is less tdan 979px wide
    $(document).ready(function() {
        var ic_windowwidth;
        ic_windowwidth = $(window).width();
        var userAlreadyOnMobile;

        if (ic_windowwidth < 980) {
            $('span.tip').remove();
            //$('.mainNavImage').remove(); //KC Added
            userAlreadyOnMobile = true;
        }

        var isSelectNavFirstResize;
        isSelectNavFirstResize = 'first';

        $(window).resize(function() {

            var ic_NewWindowwidth;
            ic_NewWindowwidth = $(window).width();

            if (ic_NewWindowwidth < 980 && isSelectNavFirstResize == 'first' && userAlreadyOnMobile != true) {

                $('.selectnav').remove();
                //$('.mainNavImage').remove(); //KC Added

                selectnav('nav', {
                    label: 'Navigation  ',
                });

                isSelectNavFirstResize = 'notFirst';
            }

        })
    });
})(jQuery);


(function($) {
    $(function() {
        selectnav('nav', {
            label: 'Navigation  ',
        });
        console.log('select nav working')
    });
})(jQuery);

($(document).ready(function() {
        selectnav('nav', {
            label: 'Navigation'
        });
        console.log('mark selectnav working');
    })

    //back to top
    (function($) {
        $(function() {
            $(window).scroll(function() {
                if ($(this).scrollTop() != 0) {
                    $('#toTop').fadeIn();
                } else {
                    $('#toTop').fadeOut();
                }
            });

            $('#toTop').click(function() {
                $('body,html').animate({
                    scrollTop: 0
                }, 800);
            });
        });
    })(jQuery);