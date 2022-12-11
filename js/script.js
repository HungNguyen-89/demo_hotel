let slideIndex = 1;

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  slideIndex2 = slideIndex;
}

let slideIndex2 = 0;
showSlides2();

function showSlides2() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides.length) { slideIndex2 = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2 - 1].style.display = "block";
  dots[slideIndex2 - 1].className += " active";
  setTimeout(showSlides2, 5000);
}


window.addEventListener('scroll', inview)

function inview() {
  var inviews = document.querySelectorAll('.inview');
  for (var i = 0; i < inviews.length; i++) {
    var windowheight = window.innerHeight;
    var inviewtop = inviews[i].getBoundingClientRect().top;
    var inviewpoint = 10;
    if (inviewtop < windowheight - inviewpoint) {
      inviews[i].classList.add('active');
    }
    else {
      inviews[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', inview2)

function inview2() {
  var inviews = document.querySelectorAll('.inview2');
  for (var i = 0; i < inviews.length; i++) {
    var windowheight = window.innerHeight;
    var inviewtop = inviews[i].getBoundingClientRect().top;
    var inviewpoint = 10;
    if (inviewtop < windowheight - inviewpoint) {
      inviews[i].classList.add('active');
    }
    else {
      inviews[i].classList.remove('active');
    }
  }

}

window.addEventListener('scroll', inview3)

function inview3() {
  var inviews = document.querySelectorAll('.inview3');
  for (var i = 0; i < inviews.length; i++) {
    var windowheight = window.innerHeight;
    var inviewtop = inviews[i].getBoundingClientRect().top;
    var inviewpoint = 10;
    if (inviewtop < windowheight - inviewpoint) {
      inviews[i].classList.add('active');
    }
    else {
      inviews[i].classList.remove('active');
    }
  }

}


let slideIndexOnsen = 1;

function currentSlideOnsen(n) {
  showSlidesOnsen(slideIndexOnsen = n);
}

function showSlidesOnsen(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesOnsen");
  let dots = document.getElementsByClassName("dotOnsen");
  if (n > slides.length) { slideIndexOnsen = 1 }
  if (n < 1) { slideIndexOnsen = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexOnsen - 1].style.display = "block";
  dots[slideIndexOnsen - 1].className += " active";
  slideIndexOnsen2 = slideIndexOnsen;
}

let slideIndexOnsen2 = 0;
showSlidesOnsen2();

function showSlidesOnsen2() {
  let i;
  let slides = document.getElementsByClassName("mySlidesOnsen");
  let dots = document.getElementsByClassName("dotOnsen");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexOnsen2++;
  if (slideIndexOnsen2 > slides.length) { slideIndexOnsen2 = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexOnsen2 - 1].style.display = "block";
  dots[slideIndexOnsen2 - 1].className += " active";
  setTimeout(showSlidesOnsen2, 5000);
}
