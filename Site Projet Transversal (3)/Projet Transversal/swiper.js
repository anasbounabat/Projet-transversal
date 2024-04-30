  // SWIPER
document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".mon-slider", {
      // Optional parameters
      loop: true,
  
      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },
  
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  
      autoplay: {
        delay: 5000,
      },
    });
  });