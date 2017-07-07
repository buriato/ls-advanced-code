const duration = 500;
let counter = 1;
let inProgress = false;

const moveSlides = (container, direction) => {
  let items = container.find('.slider__item');
  let activeItem = items.filter('.active');
  let strafeTopPercesnts = direction === 'down' ? 100 : -100;

  if (counter >= items.length) counter = 0;

  const reqItem = items.eq(counter);

  activeItem.animate({
    'top': `${strafeTopPercesnts}%`
  }, duration);

  reqItem.animate({
    top: 0
  }, duration, function () {
    activeItem.removeClass('active')
      .css('top', `${-strafeTopPercesnts}%`);
    $(this).addClass('active');

    inProgress = false;
  });
}

const run = () => {
  $('.slider__controls-top').on('click', function (e) {
    e.preventDefault()

    if (inProgress) return;
    inProgress = true;

    moveSlides($('.slider_first'), 'down');
    moveSlides($('.slider_opposite'), 'up');
    counter++;

  });
}

export default run;
