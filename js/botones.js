const zoomableImage = document.getElementById("zoomable-image");
const zoomInButton = document.getElementById("zoom-in");
const zoomOutButton = document.getElementById("zoom-out");

let currentScale = 1;

zoomInButton.addEventListener("click", () => {
  currentScale += 0.1;
  zoomableImage.style.transform = `scale(${currentScale})`;
});

zoomOutButton.addEventListener("click", () => {
  currentScale -= 0.1;
  if (currentScale < 0.1) {
    currentScale = 0.1;
  }
  zoomableImage.style.transform = `scale(${currentScale})`;
});

$(document).ready(function () {
  $("#myCarousel").carousel({
    interval: 3000,
  });
});
