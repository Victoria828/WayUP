$(function () {
  $(window).scroll(function () {
    $("#goals .section-title").each(function () {
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 650) {
        $(this).addClass("fadeInLeft");
      }
    });
  });
  $(window).scroll(function () {
    $(".advantage-trip").each(function () {
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 650) {
        $(this).addClass("fadeInUp");
      }
    });
  });
});
