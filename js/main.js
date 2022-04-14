$(function() {
	/* -----------------------------------------------------------
		header fixed
	----------------------------------------------------------- */
	$(window).on('scroll', function() {
		$(window).scrollTop() > 0 ? $('.main-header').addClass('fixed') : $('.header').removeClass('fixed');
	});

	/* -----------------------------------------------------------
		Off canvas menu
	----------------------------------------------------------- */
	$(function () {
		if (!$('.offcanvas').length) return;

		$('body').append($('<div />').addClass('toggle-offcanvas offcanvas-overlay'));

		$('.toggle-offcanvas').off('dbclick').on('click', function() {
			var viewportH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

			$('.offcanvas').css('height', viewportH);

			if (!$('body').hasClass('has-offcanvas')) {
				$('html').css('overflow', 'hidden');
				$('body').addClass('has-offcanvas offcanvas-show');
				$('.offcanvas').css('height', viewportH);

				$(window).on('resize', function() {
					$('.offcanvas').css('height', viewportH);
				});
			} else {
				$('body').removeClass('offcanvas-show');

				setTimeout(function() {
					$('body').removeClass('has-offcanvas');
					$('html').css('overflow', '');
				}, 200);
			}
		});
  });


});
