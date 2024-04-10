document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll(".foto-gallery-item img");
  const popup = document.querySelector(".popup");
  const popupImg = document.querySelector(".popup-img");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;

  galleryItems.forEach((item, index) => {
    item.addEventListener("click", function () {
      currentIndex = index;
      popupImg.src = item.src;
      popup.style.display = "block";
      // item.style.filter = "grayscale(0%)"; // Postavljanje filtera na 0%
    });
  });

  prevBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    currentIndex =
      (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    popupImg.src = galleryItems[currentIndex].src;
  });

  nextBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    currentIndex = (currentIndex + 1) % galleryItems.length;
    popupImg.src = galleryItems[currentIndex].src;
  });

  popup.addEventListener("click", function () {
    popup.style.display = "none";
  });
});
