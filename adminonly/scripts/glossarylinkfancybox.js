$(document).ready(function() {

	//glossary fancybox
	//open fancybox only if glossary is NOT already opened in the fancybox iframe.
	if (window.self == window.top) {
		$("a.glossary_link").fancybox({
			'padding': 12,
			'width': 600,		//600 - is old nrc popup width.
			'height': 150,		//0,	//400 - is old nrc popup height.	//override default (100) to prevent ribbon being displayed briefly.
			//'minHeight': 0,		//override default (100) to prevent ribbon being displayed briefly.
			'autoSize': false,
			'fitToView': false,
			'scrolling': 'no',
			'closeBtn': true,	//false,//
			'closeClick': false,
			'openEffect': 'elastic',
			'titleShow': true,
			'type': 'iframe',
			'topRatio': 0,		//set fancybox to be at top.
			'keys': {
				close: [13, 27, 32]	//13 = enter, 27 = escape, 32 = space bar
			},
			'afterLoad': function() {
			},
			'beforeShow': function() {		
				this.title = '<div style="text-align:center;"><a href="javascript:void(0)" onclick="$.fancybox.close();">Close Window</a></div>';			
			},
			'afterShow': function() {
				//$(".fancybox-wrap").css({'top':0, 'margin-top':'60px'}); //set fancybox top margin.
			},
			'onUpdate': function() {
				setFocus();	//set focus to fancybox.
			},		
			'helpers': {
				title: { type: 'inside' },
				overlay: { opacity: 0.5 }
			}
		});		
	}
 
});	//end of document ready

//set focus to fancybox.
function setFocus() {
	var iframe = $(".fancybox-iframe");
	iframe.focus();	
}