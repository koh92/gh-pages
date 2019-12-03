$(document).ready(function() { // Ждём загрузки страницы
						   
	var slides = $(".slider .slides").children(".slide"); // Получаем массив всех слайдов
	var width = $(".slider .slides").width(); // Получаем ширину видимой области
	var i = slides.length; // Получаем количество слайдов
	var offset = i * width; // Задаем начальное смещение и ширину всех слайдов
	
	$(".slider .slides").css('width',offset); // Задаем блоку со слайдами ширину всех слайдов
	
	//Создаем цикл добавляющий точки в соответствии с количеством картинок
	for (j=0; j < slides.length; j++) {
		if (j==0) {
			$(".slider .navigation").append("<div class='navigation__dots navigation__dots_active'></div>");
		}
		else {
			$(".slider .navigation").append("<div class='navigation__dots'></div>");
		}
	}

	$('.slider .navigation .navigation__dots').click(function(){
		$(".slider .navigation .navigation__dots_active").removeClass("navigation__dots_active"); //Удаляем класс с активной точки							  
		$(this).addClass("navigation__dots_active"); //Устанавливаем активный класс на нажатую точку
		i = $(this).index(); //Присваиваем переменной i номер точки
		offset = i * width; //Задаем смещение блоку в соответствии с нажатой точкой
		$(".slider .slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к следующему
	});
})

 function slowScroll(id) { 
         var offset = 0;
         $('html, body').animate({ 
              scrollTop: $(id).offset().top - offset 
         }, 1000);
         return false; 
     } 