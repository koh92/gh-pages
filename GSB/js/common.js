$(function(){
    $('.hamburger-button').on('click', function() {
       $('.menu').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
       });
    });
});

$(document).ready(function(){
	$('.slick-slider').slick({
		infinite: true,
  		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true, 
		// adaptiveHeight: true,
		centerPadding: '0px',
		prevArrow: $('.slider__prev-arrow'),
 		nextArrow: $('.slider__next-arrow')
	})
});

$(document).ready(function(){
	$('.slick-slider-2').slick({
		infinite: true,
  		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,
		centerMode: true, 
		centerPadding: '0px',
		prevArrow: $('.slider__prev-arrow-green'),
 		nextArrow: $('.slider__next-arrow-green')
	})
});