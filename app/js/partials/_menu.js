console.clear();

gsap.set(".menuBg__inner", {
  scaleX: 0,
  transformOrigin: "right"
});

gsap.set(".menuBg__inner2", {
  scaleX: 0,
  transformOrigin: "left"
});

gsap.set(".linkBox", {
  y: 110
});

gsap.set(".picture, .artistWrap, .slide, .fairsWrap, .contactInfo, .galleryWrap", {
  opacity: 0,
  y: 30,
  scale: 0.95
});

gsap.set(".picture, .fairsWrap", {
  yPercent: -50
});

gsap.to(".picture, .artistWrap, .slide, .slides, .fairsWrap, .contactInfo, .galleryWrap", {
  ease: "sine.inout",
  opacity: 1,
  y: 0,
  scale: 1,
  stagger: 0.2
});

const menuOpen = gsap
  .timeline({ paused: true })
  .to(".picture, .artistWrap, .slide, .fairsWrap, .contactInfo, .galleryWrap", {
    ease: "sine.out",
    duration: 0.5,
    opacity: 0,
    y: 30,
    scale: 0.95
  })
  .to(
    ".menu__bar",
    {
      scaleX: 0
    },
    "<"
  )
  .to(
    "h1",
    {
      opacity: 0
    },
    "<"
  )
  .to(".menu__bar", {
    transformOrigin: "left",
    rotate: 45,
    duration: 0
  })
  .to(".menuBg__inner", {
    scaleX: 1,
    stagger: {
      amount: 0.5,
      from: "start",
      ease: "sine.inout"
    }
  })
  .to(
    ".menuBg__inner2",
    {
      scaleX: 1,
      stagger: {
        amount: 0.5,
        from: "end",
        ease: "sine.inout"
      }
    },
    "<"
  )
  .to(".menu__bar", {
    scaleX: 1,
    backgroundColor: "#fff"
  })
  .to(
    ".linkBox",
    {
      y: 0,
      ease: "power3.inout",
      stagger: {
        amount: 0.3,
        from: "end"
      }
    },
    "-=0.9"
  );

$("#menu").click(function () {
	if ($(this).hasClass("menu-open")) {
		$(this).toggleClass("menu-open");

		menuOpen.reverse();
		$(".links").toggleClass("linksToTop");
	} else {
		$(this).toggleClass("menu-open");
		$(".links").toggleClass("linksToTop");

		menuOpen.play();
	}
});