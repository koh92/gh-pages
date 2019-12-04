$(function(){
    $('.hamburger_button').on('click', function() {
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
		infinite: true,
		centerMode: true, 
		centerPadding: '0px',
		prevArrow: $('.prev'),
 		nextArrow: $('.next')
	})
});