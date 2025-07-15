const swiper = new Swiper('.gallery-swiper', {
    slidesPerView: 4,
    spaceBetween: 24,
    loop:true,
    navigation: {
      nextEl: '.custom-swiper-next',
      prevEl: '.custom-swiper-prev',
    },
    breakpoints: {
      1200: { slidesPerView: 4 },
      992: { slidesPerView: 3 },
      768: { slidesPerView: 2 },
      0: { slidesPerView: 1 }
    }
  });

// FAQ Accordion JS
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const btn = item.querySelector('.faq-question');
  btn.addEventListener('click', () => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
      btn.setAttribute('aria-expanded', 'false');
    } else {
      faqItems.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      item.classList.add('active');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

// Initialize Flatpickr for the booking form
flatpickr("#tour-date", {
  minDate: "today",
  dateFormat: "d-m-Y",
  disableMobile: true,
  wrap: false
});