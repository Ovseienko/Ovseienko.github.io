
$(function() {
	$('.jcarousel')
		.on('jcarousel:create jcarousel:reload', function() {
		var element = $(this),
		width = element.innerWidth();
		element.jcarousel('items').css('width', width + 'px');
		})
		.jcarousel( {
		wrap: 'circular'
		} );
	$('.jcarousel-pagination')
		.on('jcarouselpagination:active', 'a', function() {
		$(this).addClass('active');
		})
		.on('jcarouselpagination:inactive', 'a', function() {
		$(this).removeClass('active');
		})
	.jcarouselPagination({
		item: function(page) {
			return '<a href="#' + page + '">' + page + '</a>';
		}
	});
	$('.jcarousel').jcarouselAutoscroll({
		interval: 3000,
		target: '+=1',
		autostart: true
	});
	$('.show-nav').click(function(e){
		e.preventDefault();
		$('.mobile-nav').slideToggle('slow');
		return false;
	});
	$('.read-more').click(function(event){
		event.preventDefault();
		$(this).prev('.hidden-text').slideToggle('slow');
	});
});