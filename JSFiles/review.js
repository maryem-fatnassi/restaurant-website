const swiper = new Swiper(".reviewSwiper", {
    slidesPerView: 1.2,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    grabCursor: true,
    breakpoints: {
      768: {
        slidesPerView: 2.2,
      },
      992: {
        slidesPerView: 3,
      }
    }
  });