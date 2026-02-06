const noButton = document.getElementById("no-btn");
const playArea = document.querySelector(".play-area");

noButton.addEventListener("mouseenter", () => {
  const areaRect = playArea.getBoundingClientRect();
  const btnRect = noButton.getBoundingClientRect();

  const padding = 10;

  const maxX = areaRect.width - btnRect.width - padding;
  const maxY = areaRect.height - btnRect.height - padding;

  const x = Math.random() * maxX + padding;
  const y = Math.random() * maxY + padding;

  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});
