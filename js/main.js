/* -----------------------------------------------------------
	Window resize after
----------------------------------------------------------- */
$.fn.superResize = function (options) {
	var viewportWidth = 0,
		viewportHeight = 0,
		w = viewportWidth,
		h = viewportHeight,
		timer = false,
		defaults = {
			resizeAfter: function () { }
		},
		setting = $.extend(defaults, options)
	this.on('resize', function () {
		viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
		viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
	})
	this.on('load', function () {
		setting.resizeAfter()
	})
	this.on('resize', function () {
		if (timer !== false) clearTimeout(timer)
		timer = setTimeout(function () {
			if (w != viewportWidth || h != viewportHeight) {
				setting.resizeAfter()
				w = viewportWidth
				h = viewportHeight
			}
		}, 300)
	})
	return (this)
}

// Viewport
var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

$(window).superResize({
	resizeAfter: function () {
		viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
		viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
	}
});

/* -----------------------------------------------------------
	Common
----------------------------------------------------------- */
$(function() {
	/* -----------------------------------------------------------
		Header fixed
	----------------------------------------------------------- */
	$(window).on('scroll', function() {
		$(window).scrollTop() > 0 ? $('.main-header').addClass('fixed') : $('.header').removeClass('fixed');
	});
});
