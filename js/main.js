$(function() {
	/* -----------------------------------------------------------
		header fixed
	----------------------------------------------------------- */
	$(window).on('scroll', function() {
		$(window).scrollTop() > 0 ? $('.main-header').addClass('fixed') : $('.header').removeClass('fixed');
	});




});
