/********************
	_cursor.js
********************/
var cursor = $(".cursor"),
		follower = $(".follower"),
		mainLink = $(".mainLink");

var posX = 0,
		posY = 0;

var mouseX = 0,
		mouseY = 0;

TweenMax.to({}, 0.016, {
	repeat: -1,
	onRepeat: function() {
		posX += (mouseX - posX) / 5;
		posY += (mouseY - posY) / 5;

		TweenMax.set(follower, {
			css: {
				left: posX - 21,
				top: posY - 21
			}
		});

		TweenMax.set(cursor, {
			css: {
				left: mouseX,
				top: mouseY
			}
		});
	}
});

$(document).on("mousemove", function(e) {
	mouseX = e.clientX;
	mouseY = e.clientY;
});

$("._hover").on("mouseenter", function() {
	cursor.addClass("active");
	follower.addClass("active");
});

$("._hover").on("mouseleave", function() {
	cursor.removeClass("active");
	follower.removeClass("active");
});

$("#menu").on("click", function() {
  if ( $(this).hasClass("menu-open") ) {
    cursor.toggleClass("menuActive");
    follower.toggleClass("menuActive");
    mainLink.toggleClass("menuActive");
  } else {
    cursor.toggleClass("menuActive");
    follower.toggleClass("menuActive");
    mainLink.toggleClass("menuActive");
  }
});

/********************
	_menu.js
********************/
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKlxuXHRfY3Vyc29yLmpzXG4qKioqKioqKioqKioqKioqKioqKi9cbnZhciBjdXJzb3IgPSAkKFwiLmN1cnNvclwiKSxcblx0XHRmb2xsb3dlciA9ICQoXCIuZm9sbG93ZXJcIiksXG5cdFx0bWFpbkxpbmsgPSAkKFwiLm1haW5MaW5rXCIpO1xuXG52YXIgcG9zWCA9IDAsXG5cdFx0cG9zWSA9IDA7XG5cbnZhciBtb3VzZVggPSAwLFxuXHRcdG1vdXNlWSA9IDA7XG5cblR3ZWVuTWF4LnRvKHt9LCAwLjAxNiwge1xuXHRyZXBlYXQ6IC0xLFxuXHRvblJlcGVhdDogZnVuY3Rpb24oKSB7XG5cdFx0cG9zWCArPSAobW91c2VYIC0gcG9zWCkgLyA1O1xuXHRcdHBvc1kgKz0gKG1vdXNlWSAtIHBvc1kpIC8gNTtcblxuXHRcdFR3ZWVuTWF4LnNldChmb2xsb3dlciwge1xuXHRcdFx0Y3NzOiB7XG5cdFx0XHRcdGxlZnQ6IHBvc1ggLSAyMSxcblx0XHRcdFx0dG9wOiBwb3NZIC0gMjFcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdFR3ZWVuTWF4LnNldChjdXJzb3IsIHtcblx0XHRcdGNzczoge1xuXHRcdFx0XHRsZWZ0OiBtb3VzZVgsXG5cdFx0XHRcdHRvcDogbW91c2VZXG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn0pO1xuXG4kKGRvY3VtZW50KS5vbihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbihlKSB7XG5cdG1vdXNlWCA9IGUuY2xpZW50WDtcblx0bW91c2VZID0gZS5jbGllbnRZO1xufSk7XG5cbiQoXCIuX2hvdmVyXCIpLm9uKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbigpIHtcblx0Y3Vyc29yLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuXHRmb2xsb3dlci5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbn0pO1xuXG4kKFwiLl9ob3ZlclwiKS5vbihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24oKSB7XG5cdGN1cnNvci5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcblx0Zm9sbG93ZXIucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG59KTtcblxuJChcIiNtZW51XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gIGlmICggJCh0aGlzKS5oYXNDbGFzcyhcIm1lbnUtb3BlblwiKSApIHtcbiAgICBjdXJzb3IudG9nZ2xlQ2xhc3MoXCJtZW51QWN0aXZlXCIpO1xuICAgIGZvbGxvd2VyLnRvZ2dsZUNsYXNzKFwibWVudUFjdGl2ZVwiKTtcbiAgICBtYWluTGluay50b2dnbGVDbGFzcyhcIm1lbnVBY3RpdmVcIik7XG4gIH0gZWxzZSB7XG4gICAgY3Vyc29yLnRvZ2dsZUNsYXNzKFwibWVudUFjdGl2ZVwiKTtcbiAgICBmb2xsb3dlci50b2dnbGVDbGFzcyhcIm1lbnVBY3RpdmVcIik7XG4gICAgbWFpbkxpbmsudG9nZ2xlQ2xhc3MoXCJtZW51QWN0aXZlXCIpO1xuICB9XG59KTtcblxuLyoqKioqKioqKioqKioqKioqKioqXG5cdF9tZW51LmpzXG4qKioqKioqKioqKioqKioqKioqKi9cbmNvbnNvbGUuY2xlYXIoKTtcblxuZ3NhcC5zZXQoXCIubWVudUJnX19pbm5lclwiLCB7XG4gIHNjYWxlWDogMCxcbiAgdHJhbnNmb3JtT3JpZ2luOiBcInJpZ2h0XCJcbn0pO1xuXG5nc2FwLnNldChcIi5tZW51QmdfX2lubmVyMlwiLCB7XG4gIHNjYWxlWDogMCxcbiAgdHJhbnNmb3JtT3JpZ2luOiBcImxlZnRcIlxufSk7XG5cbmdzYXAuc2V0KFwiLmxpbmtCb3hcIiwge1xuICB5OiAxMTBcbn0pO1xuXG5nc2FwLnNldChcIi5waWN0dXJlLCAuYXJ0aXN0V3JhcCwgLnNsaWRlLCAuZmFpcnNXcmFwLCAuY29udGFjdEluZm8sIC5nYWxsZXJ5V3JhcFwiLCB7XG4gIG9wYWNpdHk6IDAsXG4gIHk6IDMwLFxuICBzY2FsZTogMC45NVxufSk7XG5cbmdzYXAuc2V0KFwiLnBpY3R1cmUsIC5mYWlyc1dyYXBcIiwge1xuICB5UGVyY2VudDogLTUwXG59KTtcblxuZ3NhcC50byhcIi5waWN0dXJlLCAuYXJ0aXN0V3JhcCwgLnNsaWRlLCAuc2xpZGVzLCAuZmFpcnNXcmFwLCAuY29udGFjdEluZm8sIC5nYWxsZXJ5V3JhcFwiLCB7XG4gIGVhc2U6IFwic2luZS5pbm91dFwiLFxuICBvcGFjaXR5OiAxLFxuICB5OiAwLFxuICBzY2FsZTogMSxcbiAgc3RhZ2dlcjogMC4yXG59KTtcblxuY29uc3QgbWVudU9wZW4gPSBnc2FwXG4gIC50aW1lbGluZSh7IHBhdXNlZDogdHJ1ZSB9KVxuICAudG8oXCIucGljdHVyZSwgLmFydGlzdFdyYXAsIC5zbGlkZSwgLmZhaXJzV3JhcCwgLmNvbnRhY3RJbmZvLCAuZ2FsbGVyeVdyYXBcIiwge1xuICAgIGVhc2U6IFwic2luZS5vdXRcIixcbiAgICBkdXJhdGlvbjogMC41LFxuICAgIG9wYWNpdHk6IDAsXG4gICAgeTogMzAsXG4gICAgc2NhbGU6IDAuOTVcbiAgfSlcbiAgLnRvKFxuICAgIFwiLm1lbnVfX2JhclwiLFxuICAgIHtcbiAgICAgIHNjYWxlWDogMFxuICAgIH0sXG4gICAgXCI8XCJcbiAgKVxuICAudG8oXG4gICAgXCJoMVwiLFxuICAgIHtcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9LFxuICAgIFwiPFwiXG4gIClcbiAgLnRvKFwiLm1lbnVfX2JhclwiLCB7XG4gICAgdHJhbnNmb3JtT3JpZ2luOiBcImxlZnRcIixcbiAgICByb3RhdGU6IDQ1LFxuICAgIGR1cmF0aW9uOiAwXG4gIH0pXG4gIC50byhcIi5tZW51QmdfX2lubmVyXCIsIHtcbiAgICBzY2FsZVg6IDEsXG4gICAgc3RhZ2dlcjoge1xuICAgICAgYW1vdW50OiAwLjUsXG4gICAgICBmcm9tOiBcInN0YXJ0XCIsXG4gICAgICBlYXNlOiBcInNpbmUuaW5vdXRcIlxuICAgIH1cbiAgfSlcbiAgLnRvKFxuICAgIFwiLm1lbnVCZ19faW5uZXIyXCIsXG4gICAge1xuICAgICAgc2NhbGVYOiAxLFxuICAgICAgc3RhZ2dlcjoge1xuICAgICAgICBhbW91bnQ6IDAuNSxcbiAgICAgICAgZnJvbTogXCJlbmRcIixcbiAgICAgICAgZWFzZTogXCJzaW5lLmlub3V0XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiPFwiXG4gIClcbiAgLnRvKFwiLm1lbnVfX2JhclwiLCB7XG4gICAgc2NhbGVYOiAxLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCJcbiAgfSlcbiAgLnRvKFxuICAgIFwiLmxpbmtCb3hcIixcbiAgICB7XG4gICAgICB5OiAwLFxuICAgICAgZWFzZTogXCJwb3dlcjMuaW5vdXRcIixcbiAgICAgIHN0YWdnZXI6IHtcbiAgICAgICAgYW1vdW50OiAwLjMsXG4gICAgICAgIGZyb206IFwiZW5kXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiLT0wLjlcIlxuICApO1xuXG4kKFwiI21lbnVcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuXHRpZiAoJCh0aGlzKS5oYXNDbGFzcyhcIm1lbnUtb3BlblwiKSkge1xuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoXCJtZW51LW9wZW5cIik7XG5cblx0XHRtZW51T3Blbi5yZXZlcnNlKCk7XG5cdFx0JChcIi5saW5rc1wiKS50b2dnbGVDbGFzcyhcImxpbmtzVG9Ub3BcIik7XG5cdH0gZWxzZSB7XG5cdFx0JCh0aGlzKS50b2dnbGVDbGFzcyhcIm1lbnUtb3BlblwiKTtcblx0XHQkKFwiLmxpbmtzXCIpLnRvZ2dsZUNsYXNzKFwibGlua3NUb1RvcFwiKTtcblxuXHRcdG1lbnVPcGVuLnBsYXkoKTtcblx0fVxufSk7Il0sImZpbGUiOiJtYWluLmpzIn0=
