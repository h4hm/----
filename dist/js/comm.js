// main slide
const swiperQuiz = new Swiper(".mainslide", {
  // Optional parameters
  effect: "fade",
  loop: true,
  speed: 900,
  centeredSlides: true,
  pagination: {
    el: ".mainslide-pagination",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return (
        '<span class="' +
        currentClass +
        '"></span>' +
        '<span class="swiper-pagination-dot"></span>' +
        '<span class="' +
        totalClass +
        '"></span>'
      );
    },
  },
  navigation: {
    nextEl: ".mainslide-button-next",
    prevEl: ".mainslide-button-prev",
  },
  // scrollbar: {
  //   el: ".mainslide-scrollbar",
  //   draggable: true,
  // },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  runCallbacksOnInit: true,
});

//main slide control toggle
var $visual = $(".mainslide");
var $state = $visual.find(".swiper-state");

$state.on("click", function () {
  if ($state.hasClass("swiper-state--play")) {
    $state.removeClass("swiper-state--play").addClass("swiper-state--pause");
  } else {
    if ($state.hasClass("swiper-state--charging")) {
      mainVisualSlider.slideNext();
    }
    $state.removeClass("swiper-state--pause").addClass("swiper-state--play");
  }
});

//business slide
$(".business_slider").slick({
  speed: 600,
  autoplay: true,
  autoplaySpeed: 3500,
  infinite: true,
  slidesToScroll: 1,
  focusOnSelect: true,
  variableWidth: true,
  arrows: true,
  pauseOnHover: false,
  pauseOnFocus: false,
  swipe: false,
  touchMove: false,
  draggable: false,
  prevArrow: $(".business_wrap").find(".arrow_prev"),
  nextArrow: $(".business_wrap").find(".arrow_next"),
});

// business slide control toggle
$(".pause").click(function () {
  $(".business_slider").slick("slickPause");
});
$(".play").click(function () {
  $(".business_slider").slick("slickPlay");
});

$(".control_btn").click(function () {
  if ($(".swiper-pagenav .control_btn .play").hasClass("off")) {
    $(".swiper-pagenav .control_btn .play").removeClass("off");
    $(".swiper-pagenav .control_btn .pause").addClass("off");
  } else {
    $(".swiper-pagenav .control_btn .pause").removeClass("off");
    $(".swiper-pagenav .control_btn .play").addClass("off");
  }
});

// business slide
if (typeof $.fn.Slick === "undefined") {
  $(".business_slider").find(".b1").addClass("on");
  $(".business_slider .item.on").next().next().addClass("slick-on");

  $(".business_slider").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      $(".business_slider").find('div[class*="b"]').removeClass("on");
      $(".business_slider .item").removeClass("slick-on");
      $(".business_slider")
        .find(".item:not(.slick-cloned).b" + (nextSlide + 1))
        .addClass("on");
      $(".business_wrap .pager .now").text("0" + (nextSlide + 1));
      $(".business_slider .item.on:not(.slick-cloned)")
        .next()
        .next()
        .addClass("slick-on");
    }
  );
  $(".business_slider").on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {}
  );
}

//board slide
var swiper = new Swiper(".boardSwiper", {
  slidesPerView: "auto",
  spaceBetween: 32,
  scrollbar: {
    el: ".board-scrollbar",
    clickable: true,
  },
  navigation: {
    nextEl: ".indicator .arrow_next",
    prevEl: ".indicator .arrow_prev",
  },
});

// merit
var meritSlider = $(".merit_wrap .merit_list");
var meritSlickOptions = {
  speed: 700,
  slidesToShow: 1,
  variableWidth: true,
  infinite: true,
  arrows: false,
  touchMove: true,
  swipe: true,
};
$(window).on("load resize", function () {
  if ($(window).width() > 1480) {
    meritSlider.filter(".slick-initialized").slick("unslick");
  } else {
    meritSlider.not(".slick-initialized").slick(meritSlickOptions);
  }
});
if ($(window).width() > 1480) {
  meritSlider.filter(".slick-initialized").slick("unslick");
} else {
  meritSlider.not(".slick-initialized").slick(meritSlickOptions);
}

// test

// gsap.registerPlugin(ScrollTrigger);

// const shrinkTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".fix_wrap",
//     scrub: 1.5,
//     start: "85% 70%",
//     end: "+=400",
//     ease: "power1.in",
//   },
// });

// shrinkTl.to(".fix_wrap", {
//   duration: 1,
//   scale: 0.8,
//   filter: "blur(0px)",
// });

// gsap.to(".in_view", {
//   yPercent: -40,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".in_view",
//     start: "top bottom",
//     end: "bottom top",
//     scrub: true,
//   },
// });
