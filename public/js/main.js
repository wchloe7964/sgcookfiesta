/* public/js/main.js */
(function ($) {
  "use strict";

  var setupTheme = function () {
    try {
      // 1. AOS Initialization
      if (typeof AOS !== "undefined") {
        AOS.init({
          duration: 800,
          easing: "slide",
        });
      }

      // 2. Stellar Parallax
      if ($.isFunction($.fn.stellar)) {
        $(window).stellar({
          responsive: false,
          parallaxBackgrounds: true,
          parallaxElements: true,
          horizontalScrolling: false,
          hideDistantElements: false,
          scrollProperty: "scroll",
          horizontalOffset: 0,
          verticalOffset: 150,
        });
      }

      // 3. Scrollax
      if ($.isFunction($.Scrollax)) {
        $.Scrollax();
      }

      // 4. Owl Carousel
      if ($.isFunction($.fn.owlCarousel)) {
        $(".carousel-testimony").owlCarousel({
          center: true,
          autoplay: true,
          loop: true,
          items: 1,
          margin: 15,
          stagePadding: 0,
          nav: false,
          responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 1 },
          },
        });
        $(".carousel-model").owlCarousel({
          center: true,
          autoplay: true,
          loop: true,
          items: 1,
          margin: 15,
          stagePadding: 0,
          nav: true,
          dots: false,
          navText: [
            '<span class="ion-ios-arrow-back">',
            '<span class="ion-ios-arrow-forward">',
          ],
          responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 1 },
          },
        });
      }

      // 5. Full Height
      var fullHeight = function () {
        $(".js-fullheight").css("height", $(window).height());
      };
      fullHeight();
      $(window).resize(fullHeight);

      // 6. YouTube Background
      if ($.isFunction($.fn.mb_YTPlayer)) {
        // Ensure we check if the element exists first
        if ($(".player").length > 0) {
          $(".player").mb_YTPlayer();
        }
      }

      // 7. Waypoints
      if (typeof $.fn.waypoint !== "undefined") {
        $(".ftco-animate").waypoint(
          function (direction) {
            if (
              direction === "down" &&
              !$(this.element).hasClass("ftco-animated")
            ) {
              $(this.element).addClass("item-animate");
              setTimeout(function () {
                $("body .ftco-animate.item-animate").each(function (k) {
                  var el = $(this);
                  setTimeout(function () {
                    var effect = el.data("animate-effect");
                    if (effect === "fadeIn")
                      el.addClass("fadeIn ftco-animated");
                    else if (effect === "fadeInLeft")
                      el.addClass("fadeInLeft ftco-animated");
                    else if (effect === "fadeInRight")
                      el.addClass("fadeInRight ftco-animated");
                    else el.addClass("fadeInUp ftco-animated");
                    el.removeClass("item-animate");
                  }, k * 50);
                });
              }, 100);
            }
          },
          { offset: "95%" }
        );
      }
    } catch (e) {
      console.warn("Theme initialization warning:", e);
    }
  };

  $(document).ready(setupTheme);
  window.reInitTheme = setupTheme;
})(jQuery);
