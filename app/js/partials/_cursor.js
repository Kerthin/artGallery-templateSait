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