$(function() {
    //stretchPageWidthIfNeeded();
});

function stretchPageWidthIfNeeded() {
    var widest = null;
    $("#pageContent iframe").each(function() {
        if (widest == null)
            widest = $(this);
        else
            if ($(this).width() > widest.width())
            widest = $(this);
    });
	if(widest != null){
		var originalPageWidth = $("#doc4").width();
		var originalPageContentWidth = $("#pageContent").width();
		if (widest.width() > originalPageWidth) {
			var extraWidthRequired = widest.width() - originalPageContentWidth;
			//alert(extraWidthRequired);
			var newPageWidth = originalPageWidth + extraWidthRequired;
			var newPageContentWidth = originalPageContentWidth + extraWidthRequired;
			var paddingAdjustment = 15;
			$("#doc4").width(newPageWidth);
			$("#pageContent").width(newPageContentWidth - paddingAdjustment);
		}
	}
}
