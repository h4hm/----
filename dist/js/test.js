$(function () {
  tl = TweenMax;
  gsap.registerPlugin(ScrollTrigger);
  $(window).load(function () {
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".page_scroll_wrap"),
      smooth: true,
      smoothMobile: true,
      //getDirection: true,

      paused: true,
      onUpdate: () => {
        window.dispatchEvent(new Event("resize"));
      },
      multiplier: 1.3,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
      //getSpeed: true,
      useKeyboard: true,
      //reloadOnContextChange: true
    });

    var lastScrollTop = 0;
    var delta = 0;

    locoScroll.on("scroll", (position) => {
      //스크롤 내릴 시
      if (position.scroll.y > delta + 80) {
        document.querySelector("body").classList.add("active");
        document.querySelector("header").classList.add("active");
      } else {
        document.querySelector("body").classList.remove("active");
        document.querySelector("header").classList.remove("active");
      }

      var scrollT = position.scroll.y;
      if (Math.abs(lastScrollTop - scrollT) <= delta) return;

      //스크롤
      if (scrollT > lastScrollTop && lastScrollTop > 0) {
        $("body").addClass("hide");
      } else {
        $("body").removeClass("hide");
      }
      lastScrollTop = scrollT;
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".page_scroll_wrap", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector(".page_scroll_wrap").style.transform
        ? "transform"
        : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    gsap.to(".edu_wrap .contents", {
      scrollTrigger: {
        trigger: ".edu_wrap",
        scroller: ".page_scroll_wrap",
        scrub: true,
        start: "+=50%",
        end: "+=100%",
        ease: Power1.linear,
      },
      scale: "0.85",
      y: "10%",
    });
    gsap.from(".edu_wrap .contents .sec_title_g, .edu_wrap .link", {
      scrollTrigger: {
        trigger: ".edu_wrap",
        scroller: ".page_scroll_wrap",
        scrub: true,
        start: "+=0%",
        end: "+=50%",
        ease: Power1.linear,
      },
      opacity: 0,
    });
  });
});
