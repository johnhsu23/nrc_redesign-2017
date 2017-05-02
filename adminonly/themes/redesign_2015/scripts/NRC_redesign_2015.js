function DocumentReadyCall() 
{
	FooterTab();
	FooterDropdown();
	bindShareIcon();
	initializeShareIcon()
}

/*function SetArrowImagePosition(navHeading, arrowElement)
{
	//This is the border width of down arrow.
	var borderWidth = 10;
	// This is the width of down arrow.
	var arrowWidth = arrowElement.outerWidth();
	var offset = navHeading.offset();    		
	var leftPosition = Math.round( offset.left + (navHeading.width() / 2) - (arrowWidth / 2) + borderWidth );
}*/

function FooterTab() 
{
	jQuery(".nrc_footer .tab-links li").click(function () {
		// Remove selected status.
		jQuery(".nrc_footer .active").removeClass("active");
		
		// Store clicked tab CSS class name.
		var clickedTabClass = jQuery(this).attr("class");		
		
		// Add '.active' class to the clicked tab and tab-contnent.
		jQuery(this).closest(".tabs").find("." + clickedTabClass).addClass("active");
		jQuery(".nrc_footer .tab-content").find("." + clickedTabClass).addClass("active");
	});
}

function FooterDropdown()
{	
	// Replace the first dropdown option text. e.g. 'Select a Subject' on first load.
	// Select the first dropdown option by default
	jQuery(".nde-data-filter").each (function () {
		var defaultText = jQuery(this).find('.default-text').text();
		jQuery(this).find(".select-default").text(defaultText);
		jQuery(this).find('.default-text').attr('selected', 'selected');
	});
	
	// Replace the first dropdown option text and value. e.g. 'Select a Subject' on change.
	jQuery(".nrc_footer .nde-data-filter select").on("change", function () {		
		var newDefault = jQuery(this).find(":selected");		
		jQuery(this).closest(".nde-data-filter")
			.find(".select-default")
			.text(newDefault.text())
			.attr("title", newDefault.attr("value"))
			;
			
		// The selected value in the dropdown is saved in the span above the dropdown control.
		// After it is saved then perform the change event based on the selected dropdown.
		switch(jQuery(this).attr('id'))
		{
			case 'subjectid':
				changesubject();
				break;
			case 'gradeid':
				changegrade();
				break;
			case 'jurdid':
				changejurd();
				break;
			case 'variid':
				changevari();
				break;
			case 'statid':
				changestat();
				break;	
		}
	});
}

/* BEGIN twitter script */
!function(d,s,id){
	var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
	if(!d.getElementById(id)){
		js=d.createElement(s);
		js.id=id;js.src=p+"://platform.twitter.com/widgets.js";
		fjs.parentNode.insertBefore(js,fjs);
	}
}(document,"script","twitter-wjs");
/* END twitter script */

/*-----Begin NRC Redesign Icons -----*/
function bindShareIcon() {
	jQuery('.chart__share > a').click(function(){
		jQuery('.share__drawer').toggle();
	});
	jQuery('.share__link').click(function(){
		shareLink(); return false;
	});	
	jQuery('.share__email').click(function(){
		shareEmail(); return false;
	});	
	jQuery('.share__twitter').click(function(){
		shareTwitter(); return false;
	});
	jQuery('.share__facebook').click(function(){
		shareFacebook(); return false;
	});				
}

function initializeShareIcon() {
	var shareicon = jQuery('.share__drawer');
	if (shareicon.length > 0) {
		jQuery('.share__drawer').toggle();
	}
}
function shareLink()
{
	var linkIcon = jQuery('.share__permalink-popup');
	linkIcon.toggle();
	linkIcon.find('input:text').val(location).select();
	linkIcon.find('input:text').click(function(){ 
		this.select();
	});
	/*
	linkIcon.find('input:text').focusout(function(){ 
		linkIcon.hide();
	});
	*/
}

function shareEmail()
{
	var pagetitle = jQuery(document).attr('title');
	var subject = encodeURIComponent(pagetitle ), body = encodeURIComponent("" + pagetitle + '\n' + location);
	window.location.href = 'mailto:?to=&subject=' + subject + '&body=' + body;
}
function shareTwitter()
{
	var pagetitle = jQuery(document).attr('title');
	var opts = 'scrollbars=yes,resizable=yes,toolbar=no,location=yes', width = 550, height = 420, winHeight = window.screen.height, winWidth = window.screen.width, url = encodeURIComponent("" + location), text = encodeURIComponent("" + pagetitle );
	var left = Math.round(winWidth / 2 - width / 2), top = winHeight > height ? Math.round(winHeight / 2 - height / 2) : 0, href = 'https://twitter.com/intent/tweet?via=NAEP_NCES&url=' + url + '&text=' + text, winOpts = opts + ',width=' + width + ',height=' + height + ',left=' + left + ',top=' + top;
	window.open(href, 'twitter-share-dialog', winOpts);
} 
function shareFacebook()
{
	var pagetitle = jQuery(document).attr('title');
	var opts = 'scrollbars=yes,resizable=yes,toolbar=no,location=yes', width = 550, height = 420, winHeight = window.screen.height, winWidth = window.screen.width, url = encodeURIComponent("" + location), text = encodeURIComponent("" + pagetitle );
	var left = Math.round(winWidth / 2 - width / 2), top = winHeight > height ? Math.round(winHeight / 2 - height / 2) : 0, href = 'https://www.facebook.com/sharer/sharer.php?u=' + url + '&quote=' + text, winOpts = opts + ',width=' + width + ',height=' + height + ',left=' + left + ',top=' + top;	
	window.open(href, 'facebook-share-dialog', winOpts);
}
/*-----End NRC Redesign Icons -----*/