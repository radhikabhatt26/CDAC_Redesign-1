/* Theme Name: The Project - Responsive Website Template
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Author e-mail:htmlcoder.me@gmail.com
 * Version:1.2.0
 * Created:March 2015
 * License URI:http://support.wrapbootstrap.com/
 * File Description: Place here your custom scripts
 */

var tpj=jQuery;               // MAKE JQUERY PLUGIN CONFLICTFREE
tpj.noConflict();
                
tpj(document).ready(function() {
                
                   if (tpj.fn.cssOriginal!=undefined)   // CHECK IF fn.css already extended
                   tpj.fn.css = tpj.fn.cssOriginal;
 
                    tpj('.fullwidthbanner').revolution(
                        {    
                            delay:9000,                                                
                            startheight:490,                            
                            startwidth:890,
                            
                            hideThumbs:200,
                            
                            thumbWidth:100,                            
                            thumbHeight:50,
                            thumbAmount:5,
                            
                            navigationType:"both",                  
                            navigationArrows:"nexttobullets",        
                            navigationStyle:"round",                
                            touchenabled:"on",                      
                            onHoverStop:"on",                        
                            
                            navOffsetHorizontal:0,
                            navOffsetVertical:20,
                            
                            shadow:0,
                            fullWidth:"off"    
                                                        
                        });
})

tpj(document).ready(function(){
  tpj(".carouselStyle").owlCarousel({
                singleItem: true,
                autoPlay: 5000,
                navigation: false,
                pagination: true,
                dots: true
  });
});    