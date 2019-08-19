 /*Mobile nav*/
    $('.js--nav-icon').click(
        function() {
            var nav = $('.js--main-nav');
            nav.slideToggle("fast");
            
            var menuIcon = $('.menu');
            var closeIcon = $('.close');
            
            if (menuIcon.hasClass('hidden')) {
                menuIcon.removeClass('hidden');
            } else {
                menuIcon.addClass('hidden');
            }
            
            if (closeIcon.hasClass('hidden')) {
                closeIcon.removeClass('hidden');
            } else {
                closeIcon.addClass('hidden');
            }
        }
    );       
//alert($("p").hasClass("intro"));

//  слайдшоу

   var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1;}    
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
//  for (i = 0; i < dots.length; i++) {
//      dots[i].className = dots[i].className.replace(" active", "");
//  }
  slides[slideIndex-1].style.display = "block";  
//  dots[slideIndex-1].className += " active"; 
}
