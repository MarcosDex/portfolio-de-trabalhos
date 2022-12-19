$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    $("html").css("scrollBehavior", "smooth");
  });

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  var typed = new Typed(".typing", {
    strings: ["Developer", "Gamer", "Bukkit Developer", "Sommelier of anime"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "Student of life",
      "passion for anime and science fiction",
      "thirst for knowledge",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

var v = document.getElementsByClassName("myVideo");
function classToggle(id) {
  v[id].classList.toggle("hide");
  v[id].classList.toggle("active");
}

function closeOtherVideo(id) {
  var c = document.getElementsByClassName("myVideo");
  for (var i = 0; i < c.length; i++) {
    if (i != id) {
      v[i].pause();
      c[i].classList.remove("active");
      c[i].classList.add("hide");
    }
  }
}

document.getElementById("toVideo1").addEventListener("click", function () {
  classToggle(0), closeOtherVideo(0);
});
document.getElementById("toVideo2").addEventListener("click", function () {
  classToggle(1), closeOtherVideo(1);
});
document.getElementById("toVideo3").addEventListener("click", function () {
  classToggle(2), closeOtherVideo(2);
});
document.getElementById("toVideo4").addEventListener("click", function () {
  classToggle(3), closeOtherVideo(3);
});
