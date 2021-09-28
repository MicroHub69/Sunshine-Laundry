if($(window).width() > 800){
  
} else {  ///Mobile
var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide(){

  if(index<0){
    index = slides.length-1;
  }
  
  if(index > slides.length-1){
    index = 0;
  }
  
  for(let i = 0;i < slides.length; i++){
    slides[i].style.display = "none";
    dot[i].classList.remove("current");
  }
  
  slides[index].style.display = "block";
  dot[index].classList.add("current");
  
  index++;
  
  setTimeout(changeSlide,8000);
  
}
}///Mobile


changeSlide();

