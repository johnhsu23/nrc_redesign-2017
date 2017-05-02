$(document).ready(function() {

    //On Click Event
    $("ul.tabs li").click(function() {

        //$("ul.tabs li", $(this).parent().parent()).removeClass("active"); //Remove any "active" class, Alan WU. added the , $(this).parent().parent() to remove the same tab only.
        $("li", $(this).parent()).removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //Add "active" class to selected tab
        $(this).parent().next('.tab_container').find(".tab_content").hide(); //Hide all tab content

        var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active ID content
        return false;
    });

	$("table.Level2Default").click(function(){
		showFirstTab(this);
	});	

	//test for published page or not. Alan 3/9/2012
	var publishMath = new RegExp("\.aspx$");
	if(true)
	{
		//When page loads...
		$(".tab_content").hide(); //Hide all content
			

		var tabsets = $("ul.tabs"); 
		for(var i=0; i<tabsets.length; i++)
		{
			var activeT = $("li[class='active']", tabsets[i]);
			if(activeT.length>0)
			{
				activeT[activeT.length-1].click();
			}
			else
			{
				$("li:first", tabsets[i]).click();			
			}
		}
		
		/*
		var activeTab = $("ul.tabs li[class='active']");
		if(activeTab.length>0)
		{
			activeTab[activeTab.length-1].click();
			
		}else
		{
			//When page loads...
			$(".tab_content").hide(); //Hide all content
			$("ul.tabs li:first").addClass("active").show(); //Activate first tab
			$(".tab_content:first").show(); //Show first tab content
			
			stretchTabContainerIfNeeded();
		}
		*/
	}
	else
	{
		//When page loads...
		$(".tab_content").hide(); //Hide all content
		$("ul.tabs li:first").addClass("active").show(); //Activate first tab
		$(".tab_content:first").show(); //Show first tab content
		stretchTabContainerIfNeeded();
	}

});

function showFirstTab(parentTab){
	//get id of the tab clicked
	var subTabId = $(parentTab).attr("id");
	//get id of tab's content
	var contentId = "#Content_" + subTabId;	
	//show the specified (by set class='active' in the content) active index.
	
	var activeTab = $("ul.tabs li[class='active']", contentId);
		if(activeTab.length>0)
		{
			activeTab[activeTab.length-1].click();
			//alert(activeTab.length);
			return;
		}	
	//show the first ".tab_content" within that tab's content
	var tabToActivate = $(contentId).find("ul.tabs li:first");
	var tabContentToShow = $(contentId).find(".tab_content:first");
	$(tabToActivate).addClass("active").show();
	tabContentToShow.show();
}

function stretchTabContainerIfNeeded()
{
	var widest = $("#widestTabContent");
	var widestWidth = widest.attr("width");
	if(widestWidth)
	{
		$(".tab_container").width(widestWidth);
	}
}