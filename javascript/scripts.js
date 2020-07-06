//nav functionality
$("#menu-btn").click(function () {
  var menu = $(".nav");
  var bar1 = $(".bar1");
  var bar2 = $(".bar2");
  var bar3 = $(".bar3");
  if (menu.hasClass("nav-closed")) {
    menu.addClass("nav-opened");
    menu.removeClass("nav-closed");
    bar1.css({
      transition: "all .4s ease-in-out",
      transform: "rotate(45deg)",
      position: "absolute",
    });
    bar3.css({ transition: "all .2s ease-in-out", opacity: "0" });
    bar2.css({
      transition: "all .4s ease-in-out",
      transform: "rotate(-45deg)",
      position: "absolute",
    });
    $("html").css("overflow", "hidden");
  } else if (menu.hasClass("nav-opened")) {
    menu.addClass("nav-closed");
    menu.removeClass("nav-opened");
    bar1.css({
      transition: "all .4s ease-in-out",
      transform: "rotate(0deg)",
      position: "relative",
    });
    bar3.css({ transition: "all .5s ease-in-out", opacity: "1" });
    bar2.css({
      transition: "all .4s ease-in-out",
      transform: "rotate(0deg)",
      position: "relative",
    });
    $("html").css("overflow", "scroll");
  }
});

//skills showing proficiency script

$(".skill").click(function () {
  var skillArr = [
    { skill: "HTML", rating: "10/10", id: "html" },
    { skill: "CSS", rating: "10/10", id: "css" },
    { skill: "SCSS", rating: "8/10", id: "scss" },
    { skill: "JavaScript", rating: "7/10", id: "javascript" },
    { skill: "jQuery", rating: "7/10", id: "jquery" },
    { skill: "Python", rating: "5/10", id: "python" },
    { skill: "PHP", rating: "6/10", id: "php" },
    { skill: "SQL", rating: "5/10", id: "sql" },
  ];

  var checkText = function (id, array, element) {
    for (i = 0; i < array.length; i++) {
      if (id == array[i].id) {
        $(element).text(
          $(element).text() == array[i].skill ? array[i].rating : array[i].skill
        );
      } else if (id == array[i].rating) {
        $(element).text(
          $(element).text() == array[i].skill ? array[i].rating : array[i].skill
        );
      }
    }
  };

  if ($(this).hasClass("skill")) {
    $(this).removeClass("skill");
    $(this).addClass("skill-pro");
    checkText($(this).attr("id"), skillArr, $(this));
  } else if ($(this).hasClass("skill-pro")) {
    $(this).removeClass("skill-pro");
    $(this).addClass("skill");
    checkText($(this).attr("id"), skillArr, $(this));
  }
});

//typewriter animation
var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("name");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

$(".arrow-up").click(function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//fade in on elements on scroll

$(document).ready(function () {
  $(window).scroll(function () {
    var top_of_window = $(window).scrollTop();
    var scroll_div = $(".scroll-bottom");

    if (top_of_window > 20) {
      scroll_div.fadeOut();
    } else {
      scroll_div.fadeIn();
    }

    $(".fadein").each(function (i) {
      var top_of_element = $(this).offset();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > top_of_element.top) {
        $(this).addClass("animate");
      }
    });
  });
});

//hide scroll thing when off the top of the screen
