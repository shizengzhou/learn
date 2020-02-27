function Carousel(selector, options) {
  const carousel = document.querySelector(selector);
  const carouselItems = carousel.querySelectorAll('.carousel-item');
  const indicators = carousel.querySelectorAll('.carousel-indicators > li');

  function to(index) {
    const activeCarouselItem = carousel.querySelector('.carousel-item.active');
    activeCarouselItem.classList.remove('active');

    carouselItems[index].classList.add('active');

    const activeIndicator = carousel
      .querySelector('.carousel-indicators > .active');

    activeIndicator.classList.remove('active');

    indicators[index].classList.add('active');
  }

  function getIndex() {
    for (let i = 0; i < carouselItems.length; i++) {
      if (carouselItems[i].classList.contains('active')) {
        return i;
      }
    }
  }

  function circle() {
    const index = getIndex();
    if (index === carouselItems.length - 1) {
      to(0);
    } else {
      to(index + 1);
    }
  }

  let interval = 3000;
  if (options && options.interval) {
    interval = options.interval;
  }

  setInterval(circle, interval);

  const carouselIndicators = carousel.querySelector('.carousel-indicators');
  carouselIndicators.addEventListener('click', e => {
    const names = e.target.getAttributeNames();
    if (names.includes('data-index')) {
      const index = e.target.getAttribute('data-index');
      to(index);
    }
  });
}