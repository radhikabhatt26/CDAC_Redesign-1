/* Theme Name: The Project - Responsive Website Template
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Author e-mail:htmlcoder.me@gmail.com
 * Version:1.2.0
 * Created:March 2015
 * License URI:http://support.wrapbootstrap.com/
 * File Description: Place here your custom scripts
 */

 $(document).ready(function(){ 

	  
            $("ul.sf-menu").superfish(); 
            
    		 //image preloader 
    		$(function(){	
    			$(".portfolio-image").preloader();		
    			$(".fancy-preload").preloader();	
    			$(".node .field-type-image").preloader();	
    		});
    		
    		
    		// remove main menu title if exist
    		$('#wap-menu .titlecontainer').remove();
    		
    		// colorbox
    		$(".portfolio-colorbox").colorbox();
		
    	
   });