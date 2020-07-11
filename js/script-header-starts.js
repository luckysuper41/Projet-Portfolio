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