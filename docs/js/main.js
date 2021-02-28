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
	_cursorOff.js
********************/
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		$('.cursor, .follower').remove();
}

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKlxuXHRfY3Vyc29yLmpzXG4qKioqKioqKioqKioqKioqKioqKi9cbnZhciBjdXJzb3IgPSAkKFwiLmN1cnNvclwiKSxcblx0XHRmb2xsb3dlciA9ICQoXCIuZm9sbG93ZXJcIiksXG5cdFx0bWFpbkxpbmsgPSAkKFwiLm1haW5MaW5rXCIpO1xuXG52YXIgcG9zWCA9IDAsXG5cdFx0cG9zWSA9IDA7XG5cbnZhciBtb3VzZVggPSAwLFxuXHRcdG1vdXNlWSA9IDA7XG5cblR3ZWVuTWF4LnRvKHt9LCAwLjAxNiwge1xuXHRyZXBlYXQ6IC0xLFxuXHRvblJlcGVhdDogZnVuY3Rpb24oKSB7XG5cdFx0cG9zWCArPSAobW91c2VYIC0gcG9zWCkgLyA1O1xuXHRcdHBvc1kgKz0gKG1vdXNlWSAtIHBvc1kpIC8gNTtcblxuXHRcdFR3ZWVuTWF4LnNldChmb2xsb3dlciwge1xuXHRcdFx0Y3NzOiB7XG5cdFx0XHRcdGxlZnQ6IHBvc1ggLSAyMSxcblx0XHRcdFx0dG9wOiBwb3NZIC0gMjFcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdFR3ZWVuTWF4LnNldChjdXJzb3IsIHtcblx0XHRcdGNzczoge1xuXHRcdFx0XHRsZWZ0OiBtb3VzZVgsXG5cdFx0XHRcdHRvcDogbW91c2VZXG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn0pO1xuXG4kKGRvY3VtZW50KS5vbihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbihlKSB7XG5cdG1vdXNlWCA9IGUuY2xpZW50WDtcblx0bW91c2VZID0gZS5jbGllbnRZO1xufSk7XG5cbiQoXCIuX2hvdmVyXCIpLm9uKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbigpIHtcblx0Y3Vyc29yLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuXHRmb2xsb3dlci5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbn0pO1xuXG4kKFwiLl9ob3ZlclwiKS5vbihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24oKSB7XG5cdGN1cnNvci5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcblx0Zm9sbG93ZXIucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG59KTtcblxuJChcIiNtZW51XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gIGlmICggJCh0aGlzKS5oYXNDbGFzcyhcIm1lbnUtb3BlblwiKSApIHtcbiAgICBjdXJzb3IudG9nZ2xlQ2xhc3MoXCJtZW51QWN0aXZlXCIpO1xuICAgIGZvbGxvd2VyLnRvZ2dsZUNsYXNzKFwibWVudUFjdGl2ZVwiKTtcbiAgICBtYWluTGluay50b2dnbGVDbGFzcyhcIm1lbnVBY3RpdmVcIik7XG4gIH0gZWxzZSB7XG4gICAgY3Vyc29yLnRvZ2dsZUNsYXNzKFwibWVudUFjdGl2ZVwiKTtcbiAgICBmb2xsb3dlci50b2dnbGVDbGFzcyhcIm1lbnVBY3RpdmVcIik7XG4gICAgbWFpbkxpbmsudG9nZ2xlQ2xhc3MoXCJtZW51QWN0aXZlXCIpO1xuICB9XG59KTtcblxuLyoqKioqKioqKioqKioqKioqKioqXG5cdF9jdXJzb3JPZmYuanNcbioqKioqKioqKioqKioqKioqKioqL1xuaWYgKC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuXHRcdCQoJy5jdXJzb3IsIC5mb2xsb3dlcicpLnJlbW92ZSgpO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKipcblx0X21lbnUuanNcbioqKioqKioqKioqKioqKioqKioqL1xuY29uc29sZS5jbGVhcigpO1xuXG5nc2FwLnNldChcIi5tZW51QmdfX2lubmVyXCIsIHtcbiAgc2NhbGVYOiAwLFxuICB0cmFuc2Zvcm1PcmlnaW46IFwicmlnaHRcIlxufSk7XG5cbmdzYXAuc2V0KFwiLm1lbnVCZ19faW5uZXIyXCIsIHtcbiAgc2NhbGVYOiAwLFxuICB0cmFuc2Zvcm1PcmlnaW46IFwibGVmdFwiXG59KTtcblxuZ3NhcC5zZXQoXCIubGlua0JveFwiLCB7XG4gIHk6IDExMFxufSk7XG5cbmdzYXAuc2V0KFwiLnBpY3R1cmUsIC5hcnRpc3RXcmFwLCAuc2xpZGUsIC5mYWlyc1dyYXAsIC5jb250YWN0SW5mbywgLmdhbGxlcnlXcmFwXCIsIHtcbiAgb3BhY2l0eTogMCxcbiAgeTogMzAsXG4gIHNjYWxlOiAwLjk1XG59KTtcblxuZ3NhcC5zZXQoXCIucGljdHVyZSwgLmZhaXJzV3JhcFwiLCB7XG4gIHlQZXJjZW50OiAtNTBcbn0pO1xuXG5nc2FwLnRvKFwiLnBpY3R1cmUsIC5hcnRpc3RXcmFwLCAuc2xpZGUsIC5zbGlkZXMsIC5mYWlyc1dyYXAsIC5jb250YWN0SW5mbywgLmdhbGxlcnlXcmFwXCIsIHtcbiAgZWFzZTogXCJzaW5lLmlub3V0XCIsXG4gIG9wYWNpdHk6IDEsXG4gIHk6IDAsXG4gIHNjYWxlOiAxLFxuICBzdGFnZ2VyOiAwLjJcbn0pO1xuXG5jb25zdCBtZW51T3BlbiA9IGdzYXBcbiAgLnRpbWVsaW5lKHsgcGF1c2VkOiB0cnVlIH0pXG4gIC50byhcIi5waWN0dXJlLCAuYXJ0aXN0V3JhcCwgLnNsaWRlLCAuZmFpcnNXcmFwLCAuY29udGFjdEluZm8sIC5nYWxsZXJ5V3JhcFwiLCB7XG4gICAgZWFzZTogXCJzaW5lLm91dFwiLFxuICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgb3BhY2l0eTogMCxcbiAgICB5OiAzMCxcbiAgICBzY2FsZTogMC45NVxuICB9KVxuICAudG8oXG4gICAgXCIubWVudV9fYmFyXCIsXG4gICAge1xuICAgICAgc2NhbGVYOiAwXG4gICAgfSxcbiAgICBcIjxcIlxuICApXG4gIC50byhcbiAgICBcImgxXCIsXG4gICAge1xuICAgICAgb3BhY2l0eTogMFxuICAgIH0sXG4gICAgXCI8XCJcbiAgKVxuICAudG8oXCIubWVudV9fYmFyXCIsIHtcbiAgICB0cmFuc2Zvcm1PcmlnaW46IFwibGVmdFwiLFxuICAgIHJvdGF0ZTogNDUsXG4gICAgZHVyYXRpb246IDBcbiAgfSlcbiAgLnRvKFwiLm1lbnVCZ19faW5uZXJcIiwge1xuICAgIHNjYWxlWDogMSxcbiAgICBzdGFnZ2VyOiB7XG4gICAgICBhbW91bnQ6IDAuNSxcbiAgICAgIGZyb206IFwic3RhcnRcIixcbiAgICAgIGVhc2U6IFwic2luZS5pbm91dFwiXG4gICAgfVxuICB9KVxuICAudG8oXG4gICAgXCIubWVudUJnX19pbm5lcjJcIixcbiAgICB7XG4gICAgICBzY2FsZVg6IDEsXG4gICAgICBzdGFnZ2VyOiB7XG4gICAgICAgIGFtb3VudDogMC41LFxuICAgICAgICBmcm9tOiBcImVuZFwiLFxuICAgICAgICBlYXNlOiBcInNpbmUuaW5vdXRcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCI8XCJcbiAgKVxuICAudG8oXCIubWVudV9fYmFyXCIsIHtcbiAgICBzY2FsZVg6IDEsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIlxuICB9KVxuICAudG8oXG4gICAgXCIubGlua0JveFwiLFxuICAgIHtcbiAgICAgIHk6IDAsXG4gICAgICBlYXNlOiBcInBvd2VyMy5pbm91dFwiLFxuICAgICAgc3RhZ2dlcjoge1xuICAgICAgICBhbW91bnQ6IDAuMyxcbiAgICAgICAgZnJvbTogXCJlbmRcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCItPTAuOVwiXG4gICk7XG5cbiQoXCIjbWVudVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG5cdGlmICgkKHRoaXMpLmhhc0NsYXNzKFwibWVudS1vcGVuXCIpKSB7XG5cdFx0JCh0aGlzKS50b2dnbGVDbGFzcyhcIm1lbnUtb3BlblwiKTtcblxuXHRcdG1lbnVPcGVuLnJldmVyc2UoKTtcblx0XHQkKFwiLmxpbmtzXCIpLnRvZ2dsZUNsYXNzKFwibGlua3NUb1RvcFwiKTtcblx0fSBlbHNlIHtcblx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKFwibWVudS1vcGVuXCIpO1xuXHRcdCQoXCIubGlua3NcIikudG9nZ2xlQ2xhc3MoXCJsaW5rc1RvVG9wXCIpO1xuXG5cdFx0bWVudU9wZW4ucGxheSgpO1xuXHR9XG59KTsiXSwiZmlsZSI6Im1haW4uanMifQ==
