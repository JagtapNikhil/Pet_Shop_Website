//menu bar shrink

window.addEventListener("scroll", function() {
    const menu = document.querySelector(".menu-bar");
    if (window.scrollY > 50) { // adjust scroll amount as needed
        menu.classList.add("shrink");
    } else {
        menu.classList.remove("shrink");
    }
});
  
 // hero section slider 
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".nav.prev");
  const nextBtn = document.querySelector(".nav.next");

  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
    });
    slides[index].classList.add("active");
  }

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });



//accordian box
const acc = document.querySelectorAll(".accordian-row");

acc.forEach((row) => {
  row.addEventListener("click", function () {
    // close all panels
    acc.forEach((other) => {
      if (other !== row) {
        other.classList.remove("active");
        let otherPanel = other.nextElementSibling;
        otherPanel.style.maxHeight = null; // collapse
      }
    });

    // toggle current
    this.classList.toggle("active");
    let panel = this.nextElementSibling;

    if (this.classList.contains("active")) {
      panel.style.maxHeight = panel.scrollHeight + "px"; // expand
    } else {
      panel.style.maxHeight = null; // collapse
    }
  });
});



//owl carousal - groomers & articles
$(document).ready(function(){
  $(".doctor-slider").owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:false,
    navText:["&#10094;","&#10095;"],
    responsive:{
      0:{ items:1 },       // 1 card per slide on mobile
      575:{ items:1 },     // enforce single card up to 575px
      768:{ items:2 },     // tablets
      1000:{ items:3 }     // desktop
    }
  });
});


//owl carousal - feedback
$(document).ready(function(){
      $(".testimonial-carousel").owlCarousel({
        items: 1, /* One slide at a time */
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true
      });
    });


// scroll to top 
const scrollTopBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {   
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


//hgamburger 
const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});



function toggleMenu(el) {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('show');
}

function closeMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.remove('show');
}