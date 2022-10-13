"use strict";

function ibg() {
  var ibg = document.querySelectorAll(".ibg");

  for (var index = 0; index < ibg.length; index++) {
    if (ibg[index].querySelector('img')) {
      ibg[index].style.backgroundImage = 'url(' + ibg[index].querySelector('img').getAttribute('src') + ')';
    }
  }
}

ibg(); //BuildSlider

var sliders = document.querySelectorAll(".swiper");

if (sliders) {
  for (var index = 0; index < sliders.length; index++) {
    var slider = sliders[index];

    if (!slider.classList.contains('swiper-build')) {
      var slider_items = slider.children;

      if (slider_items) {
        for (var _index = 0; _index < slider_items.length; _index++) {
          var el = slider_items[_index];
          el.classList.add('swiper-slide');
        }
      }

      var slider_content = slider.innerHTML;
      var slider_wrapper = document.createElement("div");
      slider_wrapper.classList.add('swiper-wrapper');
      slider_wrapper.innerHTML = slider_content;
      slider.innerHTML = "";
      slider.appendChild(slider_wrapper);
      slider.classList.add('swiper-build');
    }

    if (slider.classList.contains('_gallery')) {//slider.data('lightGallery').destroy(true);
    }
  }

  sliders_build_callback();
}

function sliders_build_callback() {}

var headerBurger = document.querySelector(".header__burger");
var header = document.querySelector('.header');
var timeout = false;

if (headerBurger) {
  var menuContent = document.querySelector(".menu");
  headerBurger.addEventListener('click', function () {
    if (timeout) return;
    timeout = true;

    if (!headerBurger.classList.contains('active')) {
      document.body.style.paddingRight = window.innerWidth - document.body.clientWidth + 'px';
    } else {
      document.body.style.paddingRight = '0px';
    }

    document.body.classList.toggle("lock");
    headerBurger.classList.toggle("active");
    header.classList.toggle('active');
    menuContent.classList.toggle("active");
    setTimeout(function () {
      timeout = false;
    }, 300);
  });
}

var toTopButton = document.querySelector('.footer__to-top');

if (toTopButton) {
  toTopButton.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

if (document.querySelector('.games__items')) {
  var gamesSlider = new Swiper('.games__items', {
    speed: 800,
    loop: true,
    spaceBetween: 65,
    breakpoints: {
      992: {
        spaceBetween: 10,
        slidesPerView: 3
      },
      670: {
        slidesPerView: 2
      }
    } // navigation: {
    //     nextEl: item.parentElement.querySelector(".button-next"),
    //     prevEl: item.parentElement.querySelector(".button-prev")
    // },

  });
}

var puzzleLinks = document.querySelectorAll('[data-puzzle]');

var _loop = function _loop(_index2) {
  var link = puzzleLinks[_index2];
  link.addEventListener('click', function (e) {
    var puzzleName = link.dataset.puzzle;
    sessionStorage.setItem('puzzleName', puzzleName);
  });
};

for (var _index2 = 0; _index2 < puzzleLinks.length; _index2++) {
  _loop(_index2);
}