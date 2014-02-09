$(function() {
    var headerPos = $('.theToggla').offset().top;
		$(window).scroll(function(){    
		    if ($(this).scrollTop() > headerPos - 55){ 
		        $('.navigation').addClass('alt-nav fadeInUp');
		    }
		    else{
			    	$('.navigation').removeClass('alt-nav fadeInUp');
			    	$('.main-nav').removeClass('appear fadeIn');
		    }
		});

		$('.collapser').on('click', function(e) {
      $('.main-nav').toggleClass("appear fadeIn");
    });
});