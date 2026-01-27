const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,

  breakpoints: {
    768: { slidesPerView: 2 },
    960: { slidesPerView: 3 },
  },

  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',

    renderBullet: function (index, className) {
      if (index < 3) {
        return `<span class="${className}" data-index="${index}"></span>`;
      }
      return '';
    },
  },

  on: {
    slideChange: function () {
      const realIndex = this.realIndex % 3;
      const bullets = document.querySelectorAll('.pagination__button');

      bullets.forEach((b, i) => {
        b.classList.toggle('pagination__button--active', i === realIndex);
      });
    },
  },

  navigation: {
    nextEl: '.button-with-arrow.right',
    prevEl: '.button-with-arrow.left',
  },
});
