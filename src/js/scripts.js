$(function() {
	//RESPOSNIVE MENU//////////////////////////////
	var link = $(".menu-link");
	var linkActive = $(".menu-link_active");
	var menu = $(".menu");
	var nav = $(".menu a");
	
	link.on("click", function() {
		link.toggleClass('menu-link_active');
		menu.toggleClass('menu-active');
	});
	linkActive.on("click", function() {
		link.removeClass('menu-link_active');
	});
	nav.on("click", function() {
		menu.toggleClass('menu-active');
		link.toggleClass('menu-link_active');
	});

	//SLICK SLIDER/////////////////////////////////////////
	$('.reviews-slider').slick({
		infinite: true,
	    slidesToShow: 1,
	    arrows: true,
	    slidesToScroll: 1
	});













});