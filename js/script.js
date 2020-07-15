
/* About */
const buttons_eau = document.querySelectorAll('.hobbies-item, #projets-item');
buttons_eau.forEach(btn => {
     btn.addEventListener('mouseenter',function(){         
          let ripples = document.createElement('main');
          ripples.style.left = 0 + 'px';
          ripples.style.top = 0 + 'px';
          this.appendChild(ripples);

          setTimeout(() =>{
               ripples.remove()
          }, 800);
     })
});

/*Scroll*/
$(document).ready(function() {

     $('#navigation a,.sidebar a,.loader a,.scroll-top a,.header-nav a').click(function(event) {
     event.preventDefault();
     
     part = $(this).attr('href');

     position = $(part).offset().top;
     

     $('html, body').animate({scrollTop: position},1400);
     });
});


/*Contact*/
const followButton = document.getElementById("Follow");
const feedBackButton = document.getElementById("feedBack");
const containerrr = document.getElementById("contact-content");

followButton.addEventListener("click", () => {
  containerrr.classList.add('right-panel-active');
});

feedBackButton.addEventListener("click", () => {
  containerrr.classList.remove('right-panel-active');
});

/*backtotop*/
window.addEventListener('scroll', function(){
     var scroll = document.querySelector('.scroll-top');
     scroll.classList.toggle('active', window.scrollY > 2000)
})


/*Start-header*/
function stars(){

     let count = 50;
     let scene = document.querySelector('.scene');
     let i=0;
   
     while(i < count){
       let start = document.createElement('i');
       let x = Math.floor(Math.random() * window.innerWidth);
   
       let duration = Math.random() * 1;
       let h = Math.random() * 100;
   
       start.style.left = x +'px';
       start.style.width = 1 +'px';
       start.style.height = 2*h +'px';
       start.style.animationDuration = duration + 's';
   
       scene.appendChild(start);
       i++;
     }
   
   }
   
   stars();