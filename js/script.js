
/* About */
const buttons_eau = document.querySelectorAll('.hobbies-item, .projets-item');
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




   /*ContactForm*/
   
     // Your web app's Firebase configuration
     var firebaseConfig = {
     apiKey: "AIzaSyAhxzxY0vR0OMrG2BiPSGt5B4QKXdcVoy0",
     authDomain: "porfolio261998.firebaseapp.com",
     databaseURL: "https://porfolio261998.firebaseio.com",
     projectId: "porfolio261998",
     storageBucket: "porfolio261998.appspot.com",
     messagingSenderId: "116779099250",
     appId: "1:116779099250:web:ed466ea769f4821ef40eeb"
     };
     // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     // Reference messages collection
     var firestore = firebase.firestore();
     const savedata = firestore.collection("contactData");

     ///////////////////////////
   document.getElementById('contactForm').addEventListener('submit',submitForm);
   document.getElementById('contactForm-360').addEventListener('submit',submitForm360);

   function submitForm(e){
     e.preventDefault();
     var name =getInputVal('name');
     var email =getInputVal('email');
     var message =getInputVal('message');
     var date = new Date();
     //save content
     saveMessage(name,email,message,date);

     //show alert
     document.querySelector('.alert').style.display = 'block';

     //hide alert after 3s
     setTimeout(() => {
          document.querySelector('.alert').style.display = 'none';
     }, 3000);

     //clear Form
     document.getElementById('contactForm').reset();
   }

   function submitForm360(e){
     e.preventDefault();
     var name =getInputVal('name-360');
     var email =getInputVal('email-360');
     var message =getInputVal('message-360');
     var date = new Date();
     
     //save content
     saveMessage(name,email,message,date);

     //show alert
     document.querySelector('.alert-360').style.display = 'block';

     //hide alert after 3s
     setTimeout(() => {
          document.querySelector('.alert-360').style.display = 'none';
     }, 3000);

     //clear Form
     document.getElementById('contactForm-360').reset();
   }

   function getInputVal(id){
        return document.getElementById(id).value;
   }

   function saveMessage(name,email,message,date){
        const newMessageRef = savedata.doc();
        newMessageRef.set({
             name: name,
             email: email,
             message: message,
             date: date
        })
        .then(()=>{
             console.log('Data Saved')})
        .catch((error)=>{
             console.log(error);
        });
   }

   //show alert
   