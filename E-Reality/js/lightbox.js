'use strict';

$('body').append('\n    <div class="lightbox">\n      <a href="#lightbox" class="lightbox-close lightbox-toggle">X</a>\n      <div class="lightbox-container">\n        <div class="row">\n          <div class="col-sm-12 lightbox-column">\n            \n          </div>\n        </div>\n      </div>\n    </div>\n  ');

$('.lightbox-toggle').on('click', function (event) {
  event.preventDefault();
  $('.lightbox').fadeToggle('fast');

  var context = $(event.currentTarget).attr('data-lightbox-type');
  var content = $(event.currentTarget).attr('data-lightbox-content');
  console.log(event);
  if (context == 'video') {
    $('.lightbox-column').append('\n        <div class="lightbox-video">\n        <iframe src="' + content + '" frameborder="0" allowfullscreen> </iframe>\n        </div>\n    ');
  } else if (context == 'image') {
    $('.lightbox-column').append('\n        <img src="' + content + '" class="img-" frameborder="0" allowfullscreen>\n    ');
  }
});

$('.lightbox-close').on('click', function (event) {
  event.preventDefault();
  $('.lightbox-column > *').remove();
});