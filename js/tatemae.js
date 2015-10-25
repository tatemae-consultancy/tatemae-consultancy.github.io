function reposition() {
  window_height = $(window).height();
  window_width = $(window).width();
  one_sixth = window_height/6;

  aspect_ratio = 16 / 9; // Must match aspect ratio of background image
  window_aspect_ratio = window_width / window_height;
  if (window_aspect_ratio > aspect_ratio) {
    $('.container').css('background-size', window_width + 'px auto');
  } else {
    $('.container').css('background-size', 'auto ' + window_height + 'px');
  }

  $('main').css('margin-top', one_sixth + 'px');

  $btn = $('.btn')
  $btn.css('margin-left', '-' + ($btn.width()+40)/2 + 'px');
  $btn.css('bottom', one_sixth + 'px');
}

$(document).ready(function() {
  Pace.on('done', function() {
    $('#bg-tmp, #bg-overlay').addClass('faded');
  });
  reposition();
  $(window).resize(function() { reposition() });
});
