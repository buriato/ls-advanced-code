const parallaxContainer = document.getElementById('parallax');
const layers = parallaxContainer.children;

const moveLayers = function (e) {
  const initialX = (window.innerWidth / 2) - e.pageX;
  const initialY = (window.innerHeight / 2) - e.pageY;

  [].slice.call(layers).forEach((layer, i) => {
    const
      divider = i / 100,
      positionX = initialX * divider,
      positionY = initialY * divider,
      bottomPosition = (window.innerHeight / 2) * divider,
      transformString = `translate(${positionX}px ,${positionY}px)`,
      image = layer.firstElementChild;

    layer.style.transform = transformString;
    image.style.bottom = `-${bottomPosition}px`;
  });
};

export default moveLayers;
