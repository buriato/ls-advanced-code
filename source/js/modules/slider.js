const duration = 300;
let counter = 1;
let inProcess = false;

const moveSlide = (container, direction) => {
  let items = $('.slider__item', container);
  let activeItem = items.filter('.active');
  let strafeTopPercents = direction === 'down' ? 100 : -100;

  if (counter >= items.length) counter = 0;

  const reqItem = items.eq(counter);

  activeItem.animate({
    top: `${strafeTopPercents}%`,
  }, duration);

  reqItem.animate({
    top: 0,
  }, duration, () => {
    activeItem.removeClass('active')
      .css('top', `${-strafeTopPercents}%`);

    $(this).addClass('active');
    inProcess = false;
  });
};

const run = () => {
  $('.slider__controls-top').on('click', (e) => {
    e.preventDefault();

    if (inProcess) return;
    inProcess = true;

    moveSlide($('.slider_first'), 'down');
    moveSlide($('.slider_opposite'), 'up');

    counter++;
  });
};

export default run;
