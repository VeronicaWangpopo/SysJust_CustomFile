$(document).ready(function() {
	/* table overflow for mobile */
	function scrollTable() {
		$('.tableWrapper').each(function() {
			if($(this).get(0).scrollWidth > ($(this).get(0).clientWidth)+1){
				$(this).addClass('scrollable');
				if (($(this).outerWidth() + $(this).scrollLeft()) < $(this).get(0).scrollWidth) {
					$(this).addClass('scrollRight');
				}else{
					$(this).removeClass('scrollRight');
				}
				
				if ($(this).scrollLeft() != 0) {
					$(this).addClass('scrollLeft');
				}else{
					$(this).removeClass('scrollLeft');
				}				
			} else { $(this).removeClass('scrollable')
        .removeClass('scrollLeft')
        .removeClass('scrollRight'); }
		});
	}
	scrollTable();
	$('.tableWrapper').scroll(function () { scrollTable(); });
  $(window).bind('orientationchange resize', function(event){scrollTable(); });
});