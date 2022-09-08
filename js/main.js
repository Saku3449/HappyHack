$(function ($) {
  $(".bg-swicher").bgSwitcher({
    images: [
      "../images/background1.jpg",
      "../images/background2.jpg",
      "../images/background3.jpg",
    ],
    interval: 5000,
    loop: true,
  });

  $(window).scroll(function () {
    var targetElement = $(".fadein").offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight + 200) {
      $(".fadein").css("opacity", "1");
      $(".fadein").css("transform", "translateY(0)");
    }
  });

  $(".slider").slick({
    arrows: true,
    dots: true,
    autoplay: false,
    slidesToShow: 4,
    intinite: true,
    centerMode: true,
    centerPadding: "0%",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 635,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
  });

  $('nav a[href^="#"]').click(function () {
    var adjust = 0;
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - adjust;
    $("body,html").animate(
      {
        scrollTop: position,
      },
      speed,
      "swing"
    );
  });
});
