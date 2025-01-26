document.addEventListener("DOMContentLoaded", function() {
  let slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  document.querySelector(".prev").onclick = function() {
      plusSlides(-1);
  }
  document.querySelector(".next").onclick = function() {
      plusSlides(1);
  }

  // Thumbnail image controls
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < dots.length; i++) {
      dots[i].onclick = function() {
          currentSlide(i + 1);
      }
  }

  function plusSlides(n) {
      showSlides(slideIndex += n);
  }

  function currentSlide(n) {
      showSlides(slideIndex = n);
  }

  function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
  }
});