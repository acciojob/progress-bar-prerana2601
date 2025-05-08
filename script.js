//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".circle");
  const progressLine = document.getElementById("progress-line");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  let currentStep = 1;

  function updateProgress() {
    circles.forEach((circle, index) => {
      if (index < currentStep) {
        circle.classList.add("active");
      } else {
        circle.classList.remove("active");
      }
    });

    const activeCircles = document.querySelectorAll(".circle.active");
    const progressWidth = ((activeCircles.length - 1) / (circles.length - 1)) * 100;
    progressLine.style.setProperty("--progress-width", `${progressWidth}%`);

    prevButton.disabled = currentStep === 1;
    nextButton.disabled = currentStep === circles.length;
  }

  nextButton.addEventListener("click", () => {
    if (currentStep < circles.length) {
      currentStep++;
      updateProgress();
    }
  });

  prevButton.addEventListener("click", () => {
    if (currentStep > 1) {
      currentStep--;
      updateProgress();
    }
  });

  updateProgress();
});
