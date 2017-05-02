$(window).load(function() {
	var fullUrl = window.location.href;		//full url including QUERYSTRING
	
	//link to glossary page from the left navigation must have the querystring "ispopup=false"
	//if the querystring "ispopup=false" NOT found (glossary links from other page contents), this means the glossary link opens fancybox.
	//then, format the content inside of the fancybox.
	if (fullUrl.toLowerCase().indexOf("ispopup=false") == -1)
	{				
		//in pixels, fixed width to apply to the content within facybox.
		var width = "551";	
		
		//replace content width
		$(".nrc_body").css("width", width + "px");		
		$(".nrc_bodyContainer").css({"min-width": width + "px", "width": width + "px"});
						
		//override style from Resources/NRC.GOV/AdminOnly/Themes/Theme_main/css/PlainWithLeftNav.css
		$("#pageContent").css("padding-top", "0");
		
		//override style from corev4.css
		$("body #s4-workspace").css("overflow-y", "auto");
		
		//resize fancybox
		var newH = $(".nrc_pageContentContainer").height();
		//$(".fancybox-inner", window.parent.document).height(newH);	//In CF
		/***** delay time is required in outside of CF, but not in CF *****/
		setTimeout(function() {
		      // set new height after 1/10 seconds
		      $(".fancybox-inner", window.parent.document).height(newH);
		}, 700);
		/*****************************************************************/
		
		/*
		//The fancybox minHeight default (100) value, 
		//which was overridden to prevent ribbon being displayed briefly
		//in Resources/NRC.GOV/AdminOnly/Scripts/glossarylinkfancybox.js file.
		var offset = 100;		
		var parentWindowHeight = $(window.parent.document).height(); 	//retrieve parent window height
		var documentHeight = $(document).height(); 						//retrieve current document (fancybox) height
		var y = (parentWindowHeight/2) - (documentHeight/2);			//vertical position for fancybox
		var fancybox = $(".fancybox-wrap", window.parent.document);
		
		fancybox.css({ "top": y - offset });	//adjust fancybox position.
		*/
	}
	else
	{
		//show ribbon, banner, footer, pageupdated
		$("#s4-ribbonrow, #ribbonArrow, #header, #footer, .pageupdated").show();
	}
});	//end of $(window).load()



/*
$(function() {
	//comment out for preview site, this is needed only in CF accroding to Alan.
	var fn = FixRibbonAndWorkspaceDimensions;
	FixRibbonAndWorkspaceDimensions = function() {
		var firstCall = !g_setWidthInited;
		fn();
		if (firstCall) 
			window.location.hash = self.document.location.hash.substring(1);
	}
});*/