import preloader from './modules/preloader';
import slider from './modules/slider.js'
import slideshow from './modules/slideshow.js'

$(document).ready(() => {
  preloader();
  slider();
  slideshow();
});

var def1 = $.Deferred();
var def2 = $.Deferred();

$('.click').on('click', function (e) {
  e.preventDefault()

  setTimeout(function() {
    def1.resolve();
    console.log('def1 compleate');
  }, 2000);

  setTimeout(function() {
    def1.resolve();
    console.log('def3 compleate');
    
  }, 4000);
});

$.when(def1, def2).done(() => {
  console.log('hello');
});