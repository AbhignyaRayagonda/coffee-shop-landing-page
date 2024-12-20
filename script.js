//menu-toogle button
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});

const exploreBtn = document.querySelector(".explore-btn");

exploreBtn.addEventListener("click", () => {
  location.href = "#section2";
});

// //scroll hero swction

// const exploreBtn = document.querySelector(".explore-btn");
// const menuSection = document.querySelector(".menu-section");

// exploreBtn.onclick = function () {
//   window.scrollTo({
//     top: menuSection.offsetTop,
//     behaviour: "smooth",
//   });
// };

//carousal section

const track = document.querySelector(".carousal-container");
const items = document.querySelectorAll(".carousal");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;
//functon to update the carousal position

function updateCarousel() {
  const width = items[0].clientWidth;
  track.style.transform = `translateX(-${currentIndex * width}px)`;
}

//nextBtn functionality

function goToNext() {
  if (currentIndex < items.length - 1) {
    currentIndex++;
    updateCarousel();
  } else {
    currentIndex = 0;
  }
}

//prevBtn functionality

function goToPrev() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  } else {
    currentIndex = items.length - 1;
  }
}

//autosliding
function startAutoSlide() {
  autoSlideInterval = setInterval(goToNext, 3000);
}

//stop sliding

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

//event listeners

nextBtn.addEventListener("click", () => {
  stopAutoSlide();
  goToNext();
  startAutoSlide();
});

prevBtn.addEventListener("click", () => {
  stopAutoSlide();
  goToPrev();
  startAutoSlide();
});

//pause auto-slide on mouseover

track.addEventListener("mouseover", stopAutoSlide);
track.addEventListener("mouseout", startAutoSlide);
//Adjust the carousal on window resize

window.addEventListener("resize", updateCarousel);

startAutoSlide();
