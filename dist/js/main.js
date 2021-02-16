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
		cursor.addClass("menuActive");
		follower.addClass("menuActive");
		mainLink.addClass("menuActive");
	} else {
		cursor.removeClass("menuActive");
		follower.removeClass("menuActive");
		mainLink.removeClass("menuActive");
	}
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKlxuXHRfY3Vyc29yLmpzXG4qKioqKioqKioqKioqKioqKioqKi9cbnZhciBjdXJzb3IgPSAkKFwiLmN1cnNvclwiKSxcblx0XHRmb2xsb3dlciA9ICQoXCIuZm9sbG93ZXJcIiksXG5cdFx0bWFpbkxpbmsgPSAkKFwiLm1haW5MaW5rXCIpO1xuXG52YXIgcG9zWCA9IDAsXG5cdFx0cG9zWSA9IDA7XG5cbnZhciBtb3VzZVggPSAwLFxuXHRcdG1vdXNlWSA9IDA7XG5cblR3ZWVuTWF4LnRvKHt9LCAwLjAxNiwge1xuXHRyZXBlYXQ6IC0xLFxuXHRvblJlcGVhdDogZnVuY3Rpb24oKSB7XG5cdFx0cG9zWCArPSAobW91c2VYIC0gcG9zWCkgLyA1O1xuXHRcdHBvc1kgKz0gKG1vdXNlWSAtIHBvc1kpIC8gNTtcblxuXHRcdFR3ZWVuTWF4LnNldChmb2xsb3dlciwge1xuXHRcdFx0Y3NzOiB7XG5cdFx0XHRcdGxlZnQ6IHBvc1ggLSAyMSxcblx0XHRcdFx0dG9wOiBwb3NZIC0gMjFcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdFR3ZWVuTWF4LnNldChjdXJzb3IsIHtcblx0XHRcdGNzczoge1xuXHRcdFx0XHRsZWZ0OiBtb3VzZVgsXG5cdFx0XHRcdHRvcDogbW91c2VZXG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn0pO1xuXG4kKGRvY3VtZW50KS5vbihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbihlKSB7XG5cdG1vdXNlWCA9IGUuY2xpZW50WDtcblx0bW91c2VZID0gZS5jbGllbnRZO1xufSk7XG5cbiQoXCIuX2hvdmVyXCIpLm9uKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbigpIHtcblx0Y3Vyc29yLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuXHRmb2xsb3dlci5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbn0pO1xuXG4kKFwiLl9ob3ZlclwiKS5vbihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24oKSB7XG5cdGN1cnNvci5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcblx0Zm9sbG93ZXIucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG59KTtcblxuJChcIiNtZW51XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG5cdGlmICggJCh0aGlzKS5oYXNDbGFzcyhcIm1lbnUtb3BlblwiKSApIHtcblx0XHRjdXJzb3IuYWRkQ2xhc3MoXCJtZW51QWN0aXZlXCIpO1xuXHRcdGZvbGxvd2VyLmFkZENsYXNzKFwibWVudUFjdGl2ZVwiKTtcblx0XHRtYWluTGluay5hZGRDbGFzcyhcIm1lbnVBY3RpdmVcIik7XG5cdH0gZWxzZSB7XG5cdFx0Y3Vyc29yLnJlbW92ZUNsYXNzKFwibWVudUFjdGl2ZVwiKTtcblx0XHRmb2xsb3dlci5yZW1vdmVDbGFzcyhcIm1lbnVBY3RpdmVcIik7XG5cdFx0bWFpbkxpbmsucmVtb3ZlQ2xhc3MoXCJtZW51QWN0aXZlXCIpO1xuXHR9XG59KTsiXSwiZmlsZSI6Im1haW4uanMifQ==
