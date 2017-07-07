let percentsTotal = 0;
const preloader = $('.preloader');

const imgPath = $('*').map((ndx, element) => {
  const background = $(element).css('background-image');
  const img = $(element).is('img');
  let path = '';

  if (background != 'none') {
    path = background.replace('url("', '').replace('")', '');
  }

  if (img) {
    path = $(element).attr('src');
  }

  if (path) return path;
});

const setPercents = (total, current) => {
  const persents = Math.ceil(current / total * 100);

  $('.preloader__percents').text(`${persents}%`);

  if (persents >= 100) preloader.fadeOut();
};

const loadImages = (images) => {
  if (!images.length) preloader.fadeOut();

  images.forEach((img, i, images) => {
    const fakeImage = $('<img>', {
      attr: {
        src: img,
      },
    });

    fakeImage.on('load error', () => {
      percentsTotal++;
      setPercents(images.length, percentsTotal);
    });
  });
};

const imgs = imgPath.toArray();

export default () => {
  loadImages(imgs);
};
