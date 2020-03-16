//Adaptive functions
$(window).resize(function(event) {
	adaptive_function();
});
function adaptive_header(w,h) {
		var headerMenu=$('.header-menu');
		var headerLangs=$('.header-top-lang');
		var headerTop=$('.header-top');
	if(w<751){
		if(!headerLangs.hasClass('done')){
			headerLangs.addClass('done').appendTo(headerMenu);
		}
	}else{
		if(headerLangs.hasClass('done')){
			headerLangs.removeClass('done').prependTo(headerTop);
		}
	}
	if(w<751){
		if(!$('.header-bottom-menu').hasClass('done')){
			$('.header-bottom-menu').addClass('done').appendTo(headerMenu);
		}
	}else{
		$.each($('.header-bottom-menu'), function(index, val) {
			if($(this).hasClass('header-bottom-menu--right')) {
				if($(this).hasClass('done')){
					$(this).removeClass('done').prependTo($('.header-bottom__column').eq(2));
				}
			} else {
				if($(this).hasClass('done')){
					$(this).removeClass('done').prependTo($('.header-bottom__column').eq(0));
				}
			}
			
		});
		
	}
}
function adaptive_function() {
		var w=$(window).outerWidth();
		var h=$(window).outerHeight();
	adaptive_header(w,h);
}
	adaptive_function();