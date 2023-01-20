// slider 
$(function () {
  // Owl Carousel
  var owl = $(".desktopSlider .owl-carousel");
  owl.owlCarousel({
    items: 4,
    margin: 10,
    loop: true,
    nav: false,
    dot: true,
  });
});

$(function () {
    // Owl Carousel
    var owl = $(".mobileSlider .owl-carousel");
    owl.owlCarousel({
      items: 1,
      margin: 10,
      loop: true,
      nav: true,
      dot: false,
    });
  });

// tab
const one = document.getElementById("#one");
const two = document.getElementById("#two");

const contentOne = document.querySelector(".one");
const contentTwo = document.querySelector(".two");

const One = () => {
  contentOne.style.display = "block";

  contentTwo.style.display = "none";

  document.querySelector(".scheduleSection #one").classList.add("active");
  document.querySelector(".scheduleSection #two").classList.remove("active");
};

const Two = () => {
  contentTwo.style.display = "block";

  contentOne.style.display = "none";

  document.querySelector(".scheduleSection #two").classList.add("active");
  document.querySelector(".scheduleSection #one").classList.remove("active");
};

