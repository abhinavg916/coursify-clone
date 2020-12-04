// $("body").scrollspy({ target: "#main-nav" });

// $("#main-nav a").on("click", function (e) {
//   if (this.hash !== "") {
//     e.preventDefault();

//     const hash = this.hash;

//     $("html, body").animate(
//       {
//         scrollTop: $(hash).offset().top,
//       },
//       1000,
//       function () {
//         window.location.hash = hash;
//       }
//     );
//   }
// });

// Smooth Scrolling
$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000
        );
        return false;
      }
    }
  });
});

// Animation
window.sr = ScrollReveal();

sr.reveal(".navbar", {
  duration: 2000,
  origin: "bottom",
});

sr.reveal(".showcase-top", {
  duration: 2000,
  origin: "top",
  distance: "300px",
});

sr.reveal(".showcase-right", {
  duration: 2000,
  origin: "right",
  distance: "0px",
});

sr.reveal(".showcase-bottom", {
  duration: 2000,
  origin: "bottom",
  distance: "300px",
});

sr.reveal(".showcase-left", {
  duration: 2000,
  origin: "left",
  distance: "0px",
});

sr.reveal(".showcase-simple", {
  duration: 2000,
  origin: "bottom",
});

sr.reveal(".showcase-btn", {
  duration: 2000,
  delay: 500,
  origin: "bottom",
});

sr.reveal(".info-top", {
  duration: 2000,
  origin: "top",
  distance: "300px",
  viewFactor: 0.2,
});

sr.reveal(".info-right", {
  duration: 2000,
  origin: "right",
  distance: "0px",
  viewFactor: 0.2,
});

sr.reveal(".info-bottom", {
  duration: 2000,
  origin: "bottom",
  distance: "300px",
  viewFactor: 0.2,
});

sr.reveal(".info-left", {
  duration: 2000,
  origin: "left",
  distance: "0px",
  viewFactor: 0.2,
});

sr.reveal(".info-simple", {
  duration: 2000,
  origin: "bottom",
  distance: "300px",
  viewFactor: 0.2,
});
