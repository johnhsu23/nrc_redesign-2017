jQuery(window).load(function() {
	// Executes when complete page is fully loaded, including all objects and images.
	// Call WindowLoadCall() function
	//WindowLoadCall();
	AccessibleMegaMenu();
});	

jQuery(document).ready(function(){
	WindowLoadCall();
});

function WindowLoadCall()
{
	SelectTopNav();
	HoverTopNav();
	AccessibleDropdownMenu();
	//AccessibleMegaMenu();
}

// $j is now an alias to the jQuery function. 
// This is to avoid conflict of using multiple version of jQuery library.
var $j = jQuery.noConflict();
function AccessibleMegaMenu()
{	
	// Implement a keyboard and screen reader accessible mega menu
	// Initialize and apply settings for accessibleMegaMenu.
	// Refer: https://adobe-accessibility.github.io/Accessible-Mega-Menu/
	$j(".header__top nav").accessibleMegaMenu({
        // prefix for generated unique id attributes, which are required 
        //   to indicate aria-owns, aria-controls and aria-labelledby
        uuidPrefix: "accessible-megamenu",

        // css class used to define the megamenu styling
        menuClass: "nav-menu",

        // css class for a top-level navigation item in the megamenu
        topNavItemClass: "nav-item",

        // css class for a megamenu panel 
        panelClass: "sub-nav",

        // css class for a group of items within a megamenu panel
        panelGroupClass: "sub-nav-group",

        // css class for the hover state
        hoverClass: "hover",

        // css class for the focus state
        focusClass: "focus",

        // css class for the open state
        openClass: "open"
    });
}

function SelectTopNav() 
{
	// Get current page url pathname.
    //var pathname = jQuery.trim(window.location.pathname).toLowerCase();
	var pathname = jQuery.trim(window.location.href).toLowerCase();
        
	// Set selected top navigation style.
    jQuery(".header__top a").each(function () {
    	var navUrl = jQuery.trim(jQuery(this).attr("href")).toLowerCase();    	
    	if(navUrl != "" && pathname.indexOf(navUrl) != -1) {
    		jQuery(this).closest(".nav-item").addClass("selected");
       	}
    });
    
	// Mobile touch: empty function is required for mobile touch.
	jQuery(".header__top .nav-heading").on("touchstart", function () {
	});
}

function HoverTopNav()
{
	var isSelected = false;
	var selectedNav = null;
	
	// Set hover style for top navigation.
    jQuery(".header__top .nav-heading").hover(function () {
    	var navItem = jQuery(this).closest(".nav-item");
    	if (navItem.hasClass("selected")) {    		
    		navItem.removeClass("selected");
    		selectedNav = navItem;
    		isSelected = true;
    	}
		jQuery(this).closest(".nav-item").addClass("hover");    	
    }, function () {
    	jQuery(".header__top .nav-item")
    		.removeClass("hover")
    		.find(".sub-nav").removeClass("open focus")
    		;    	
    	if (isSelected) {
    		selectedNav.addClass("selected");    		
    	}
    });
    
    // Hide top navigation dropdown when mouse is moved away.
    jQuery(".header__top .sub-nav").mouseout(function () {
    	jQuery(this).removeClass("open focus");
    });
}

// Make dropdown header menu accessible via keyboard and screen reader.
function AccessibleDropdownMenu()
{
	jQuery(".header__top .nav-heading, .header__top .nav-heading a").on("focus", function () {		
		// Close all dropdown menu first.
		jQuery(".header__top .nav-item, .header__top .sub-nav").removeClass("open");
		
		// Expand focus dropdown menu.
		jQuery(this)
			.closest(".nav-item")
			.addClass("open")
			.find(".sub-nav")
			.addClass("open");				
	});
}
function ToggleSearchButton(e)
{
if (e.keyCode == 13 || e==0) {
		var searchBox = jQuery("#search-container-id");
		if (searchBox.hasClass('hide-search-box'))
		{
			searchBox.removeClass('hide-search-box');
			searchBox.addClass('show-search-box');
			jQuery("#searchBox").focus();
		}
		else
		{
			if(e.keyCode != 13 ){
				searchBox.removeClass('show-search-box').removeClass('search-clicked');
				searchBox.addClass('hide-search-box');
			}

		}
	}

}

function HideSearch(e)
{
	var searchBox = jQuery("#search-container-id");
	if(jQuery("#searchButton").is(":active")==false && jQuery("#magnifier").is(":active")== false && e.relatedTarget===null){
	
		searchBox.removeClass('show-search-box').removeClass('search-clicked');
		searchBox.addClass('hide-search-box');
	}
	
}