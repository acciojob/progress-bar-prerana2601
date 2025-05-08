document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".circle");
  const progressLine = document.getElementById("progress-line");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  let currentStep = 1;

  function updateProgress() {
    circles.forEach((circle, index) => {
      circle.classList.toggle("active", index < currentStep);
    });

    const activeCount = currentStep - 1;
    const percentage = (activeCount / (circles.length - 1)) * 100;
    progressLine.style.setProperty('--progress-width', `${percentage}%`);
    progressLine.querySelector('::after'); // Needed to trigger CSS update

    // Directly update progress bar
    progressLine.style.setProperty('--after-width', `${percentage}%`);
    progressLine.style.setProperty('position', 'relative');
    progressLine.innerHTML = `<div style="position:absolute;height:4px;background:#4caf50;width:${percentage}%;top:0;left:0;"></div>`;

    prevBtn.disabled = currentStep === 1;
    nextBtn.disabled = currentStep === circles.length;
  }

  nextBtn.addEventListener("click", () => {
    if (currentStep < circles.length) {
      currentStep++;
      updateProgress();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentStep > 1) {
      currentStep--;
      updateProgress();
    }
  });

  updateProgress();
});
