
var menuIcon = document.getElementById('menu-icon');
var crossIcon = document.getElementById('cross-icon');
var menu = document.getElementById('menu');

function openmenu(){
    menu.style.top= "0";
    menuIcon.style.display="none";
    crossIcon.style.display="block";
}

function closemenu(){
    menu.style.top="-320px";
    crossIcon.style.display="none";
    menuIcon.style.display="block";
}


var type=new Typed('.textline',{
   strings:["Forntend Developer","UX/UI Designer","Machine Learning Engineer"],
   typeSpeed:100,
   backSpeed:100,
   backDelay:2000,
   loop:true,
   typeSpeed:100
})

var scroll = new SmoothScroll('a[href*="#"]', {
   speed: 1000,
   speedAsDuration: true
   });
