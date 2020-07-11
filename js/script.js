/*Header*/
/*
$(document).ready(function() {
	$(window).scroll(function(event) {
		var pos_body = $('html,body').scrollTop();
     
	// console.log(pos_body);
	if(pos_body>60){
      $('.header-nav').addClass('scroll-header');
      $('.nav-link').addClass('scroll-item');
      $('header a.logo span').addClass('scroll-logo');
      $('header #toggle').addClass('scroll-toggle');
      $('.wrapper-header .sidebar').addClass('scroll-wrapper');
      }
	else {
      $('.header-nav').removeClass('scroll-header');
      $('.nav-link').removeClass('scroll-item');
      $('header a.logo span').removeClass('scroll-logo');
      $('header #toggle').removeClass('scroll-toggle');
      $('.wrapper-header .sidebar').removeClass('scroll-wrapper');
	}
     });
       
     $('.back-to-top').click(function(event) {
          $('html,body').animate({
               scrollTop: 0},
               1400);
	});

});*/

/* About */
const buttons_eau = document.querySelectorAll('.hobbies-item');
buttons_eau.forEach(btn => {
     btn.addEventListener('mouseenter',function(){         
          let ripples = document.createElement('main');
          ripples.style.left = 0 + 'px';
          ripples.style.top = 0 + 'px';
          this.appendChild(ripples);

          setTimeout(() =>{
               ripples.remove()
          }, 1000);
     })
});

     
$(document).ready(function() {

     $('#navigation a,.sidebar a').click(function(event) {
     event.preventDefault();
     
     part = $(this).attr('href');

     position = $(part).offset().top;
     

     $('html, body').animate({scrollTop: position},1400);
     });
});