/*url decodes all href values on the page*/
jQuery(document).ready(function () {
	jQuery("div#s4-bodyContainer a[href]").each(function (index) {
		var value = jQuery(this).attr('href');
		jQuery(this).attr("href", decodeURIComponent(value));
	})
});