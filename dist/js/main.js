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
if(window.TouchEvent) {
	$('.cursor, .follower').css('display','none')
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKlxuXHRfY3Vyc29yLmpzXG4qKioqKioqKioqKioqKioqKioqKi9cbnZhciBjdXJzb3IgPSAkKFwiLmN1cnNvclwiKSxcblx0XHRmb2xsb3dlciA9ICQoXCIuZm9sbG93ZXJcIiksXG5cdFx0bWFpbkxpbmsgPSAkKFwiLm1haW5MaW5rXCIpO1xuXG52YXIgcG9zWCA9IDAsXG5cdFx0cG9zWSA9IDA7XG5cbnZhciBtb3VzZVggPSAwLFxuXHRcdG1vdXNlWSA9IDA7XG5cblR3ZWVuTWF4LnRvKHt9LCAwLjAxNiwge1xuXHRyZXBlYXQ6IC0xLFxuXHRvblJlcGVhdDogZnVuY3Rpb24oKSB7XG5cdFx0cG9zWCArPSAobW91c2VYIC0gcG9zWCkgLyA1O1xuXHRcdHBvc1kgKz0gKG1vdXNlWSAtIHBvc1kpIC8gNTtcblxuXHRcdFR3ZWVuTWF4LnNldChmb2xsb3dlciwge1xuXHRcdFx0Y3NzOiB7XG5cdFx0XHRcdGxlZnQ6IHBvc1ggLSAyMSxcblx0XHRcdFx0dG9wOiBwb3NZIC0gMjFcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdFR3ZWVuTWF4LnNldChjdXJzb3IsIHtcblx0XHRcdGNzczoge1xuXHRcdFx0XHRsZWZ0OiBtb3VzZVgsXG5cdFx0XHRcdHRvcDogbW91c2VZXG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn0pO1xuXG4kKGRvY3VtZW50KS5vbihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbihlKSB7XG5cdG1vdXNlWCA9IGUuY2xpZW50WDtcblx0bW91c2VZID0gZS5jbGllbnRZO1xufSk7XG5cbiQoXCIuX2hvdmVyXCIpLm9uKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbigpIHtcblx0Y3Vyc29yLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuXHRmb2xsb3dlci5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbn0pO1xuXG4kKFwiLl9ob3ZlclwiKS5vbihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24oKSB7XG5cdGN1cnNvci5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcblx0Zm9sbG93ZXIucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG59KTtcblxuJChcIiNtZW51XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gIGlmICggJCh0aGlzKS5oYXNDbGFzcyhcIm1lbnUtb3BlblwiKSApIHtcbiAgICBjdXJzb3IudG9nZ2xlQ2xhc3MoXCJtZW51QWN0aXZlXCIpO1xuICAgIGZvbGxvd2VyLnRvZ2dsZUNsYXNzKFwibWVudUFjdGl2ZVwiKTtcbiAgICBtYWluTGluay50b2dnbGVDbGFzcyhcIm1lbnVBY3RpdmVcIik7XG4gIH0gZWxzZSB7XG4gICAgY3Vyc29yLnRvZ2dsZUNsYXNzKFwibWVudUFjdGl2ZVwiKTtcbiAgICBmb2xsb3dlci50b2dnbGVDbGFzcyhcIm1lbnVBY3RpdmVcIik7XG4gICAgbWFpbkxpbmsudG9nZ2xlQ2xhc3MoXCJtZW51QWN0aXZlXCIpO1xuICB9XG59KTtcblxuLyoqKioqKioqKioqKioqKioqKioqXG5cdF9jdXJzb3JPZmYuanNcbioqKioqKioqKioqKioqKioqKioqL1xuaWYod2luZG93LlRvdWNoRXZlbnQpIHtcblx0JCgnLmN1cnNvciwgLmZvbGxvd2VyJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpXG59XG5cbi8qKioqKioqKioqKioqKioqKioqKlxuXHRfbWVudS5qc1xuKioqKioqKioqKioqKioqKioqKiovXG5jb25zb2xlLmNsZWFyKCk7XG5cbmdzYXAuc2V0KFwiLm1lbnVCZ19faW5uZXJcIiwge1xuICBzY2FsZVg6IDAsXG4gIHRyYW5zZm9ybU9yaWdpbjogXCJyaWdodFwiXG59KTtcblxuZ3NhcC5zZXQoXCIubWVudUJnX19pbm5lcjJcIiwge1xuICBzY2FsZVg6IDAsXG4gIHRyYW5zZm9ybU9yaWdpbjogXCJsZWZ0XCJcbn0pO1xuXG5nc2FwLnNldChcIi5saW5rQm94XCIsIHtcbiAgeTogMTEwXG59KTtcblxuZ3NhcC5zZXQoXCIucGljdHVyZSwgLmFydGlzdFdyYXAsIC5zbGlkZSwgLmZhaXJzV3JhcCwgLmNvbnRhY3RJbmZvLCAuZ2FsbGVyeVdyYXBcIiwge1xuICBvcGFjaXR5OiAwLFxuICB5OiAzMCxcbiAgc2NhbGU6IDAuOTVcbn0pO1xuXG5nc2FwLnNldChcIi5waWN0dXJlLCAuZmFpcnNXcmFwXCIsIHtcbiAgeVBlcmNlbnQ6IC01MFxufSk7XG5cbmdzYXAudG8oXCIucGljdHVyZSwgLmFydGlzdFdyYXAsIC5zbGlkZSwgLnNsaWRlcywgLmZhaXJzV3JhcCwgLmNvbnRhY3RJbmZvLCAuZ2FsbGVyeVdyYXBcIiwge1xuICBlYXNlOiBcInNpbmUuaW5vdXRcIixcbiAgb3BhY2l0eTogMSxcbiAgeTogMCxcbiAgc2NhbGU6IDEsXG4gIHN0YWdnZXI6IDAuMlxufSk7XG5cbmNvbnN0IG1lbnVPcGVuID0gZ3NhcFxuICAudGltZWxpbmUoeyBwYXVzZWQ6IHRydWUgfSlcbiAgLnRvKFwiLnBpY3R1cmUsIC5hcnRpc3RXcmFwLCAuc2xpZGUsIC5mYWlyc1dyYXAsIC5jb250YWN0SW5mbywgLmdhbGxlcnlXcmFwXCIsIHtcbiAgICBlYXNlOiBcInNpbmUub3V0XCIsXG4gICAgZHVyYXRpb246IDAuNSxcbiAgICBvcGFjaXR5OiAwLFxuICAgIHk6IDMwLFxuICAgIHNjYWxlOiAwLjk1XG4gIH0pXG4gIC50byhcbiAgICBcIi5tZW51X19iYXJcIixcbiAgICB7XG4gICAgICBzY2FsZVg6IDBcbiAgICB9LFxuICAgIFwiPFwiXG4gIClcbiAgLnRvKFxuICAgIFwiaDFcIixcbiAgICB7XG4gICAgICBvcGFjaXR5OiAwXG4gICAgfSxcbiAgICBcIjxcIlxuICApXG4gIC50byhcIi5tZW51X19iYXJcIiwge1xuICAgIHRyYW5zZm9ybU9yaWdpbjogXCJsZWZ0XCIsXG4gICAgcm90YXRlOiA0NSxcbiAgICBkdXJhdGlvbjogMFxuICB9KVxuICAudG8oXCIubWVudUJnX19pbm5lclwiLCB7XG4gICAgc2NhbGVYOiAxLFxuICAgIHN0YWdnZXI6IHtcbiAgICAgIGFtb3VudDogMC41LFxuICAgICAgZnJvbTogXCJzdGFydFwiLFxuICAgICAgZWFzZTogXCJzaW5lLmlub3V0XCJcbiAgICB9XG4gIH0pXG4gIC50byhcbiAgICBcIi5tZW51QmdfX2lubmVyMlwiLFxuICAgIHtcbiAgICAgIHNjYWxlWDogMSxcbiAgICAgIHN0YWdnZXI6IHtcbiAgICAgICAgYW1vdW50OiAwLjUsXG4gICAgICAgIGZyb206IFwiZW5kXCIsXG4gICAgICAgIGVhc2U6IFwic2luZS5pbm91dFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcIjxcIlxuICApXG4gIC50byhcIi5tZW51X19iYXJcIiwge1xuICAgIHNjYWxlWDogMSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiXG4gIH0pXG4gIC50byhcbiAgICBcIi5saW5rQm94XCIsXG4gICAge1xuICAgICAgeTogMCxcbiAgICAgIGVhc2U6IFwicG93ZXIzLmlub3V0XCIsXG4gICAgICBzdGFnZ2VyOiB7XG4gICAgICAgIGFtb3VudDogMC4zLFxuICAgICAgICBmcm9tOiBcImVuZFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcIi09MC45XCJcbiAgKTtcblxuJChcIiNtZW51XCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcblx0aWYgKCQodGhpcykuaGFzQ2xhc3MoXCJtZW51LW9wZW5cIikpIHtcblx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKFwibWVudS1vcGVuXCIpO1xuXG5cdFx0bWVudU9wZW4ucmV2ZXJzZSgpO1xuXHRcdCQoXCIubGlua3NcIikudG9nZ2xlQ2xhc3MoXCJsaW5rc1RvVG9wXCIpO1xuXHR9IGVsc2Uge1xuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoXCJtZW51LW9wZW5cIik7XG5cdFx0JChcIi5saW5rc1wiKS50b2dnbGVDbGFzcyhcImxpbmtzVG9Ub3BcIik7XG5cblx0XHRtZW51T3Blbi5wbGF5KCk7XG5cdH1cbn0pOyJdLCJmaWxlIjoibWFpbi5qcyJ9
