$(function(){

	var leftNavTreeFromCF 	= $(".NRC2009");
	var dropdownFromCF 		= $(".NRCMenu");
	var leftNavFromOldPage 	= $(".leftNav");		//for old pages that are migrated
	var dropdownFromOldPage = $("#dropDownNav");	//for old pages that are migrated		
	
	// By default, the body content has 165px margin-left.
	// When Left navigagion is NOT presented, remove left margin of the body content.	
	if (leftNavTreeFromCF.length == 0) {	
		$(".nrc_pageContent").css({"margin-left": "0"});
		
		//if dropdown menu is NOT presented, add top margin of the body content.	
		if (dropdownFromCF.length > 0) {
			$(".nrc_pageContent").css({"margin-top": "14px"});
		}
	}

	
	// ***** BEGIN: This is for migrated pages. ***** //
	// no left nav found.
	if (leftNavFromOldPage.length == 0) {
		$(".yui-t1 #yui-main .yui-b").css("margin-left","0");
	}
	
	// dropdown menu found
	if (dropdownFromOldPage.length > 0) {
		$("#pageContent").css("padding-top", "0");	
	}
	// ***** END: This is for migrated pages. ******* //
	
});