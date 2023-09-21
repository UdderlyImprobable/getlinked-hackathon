// script.js
document.addEventListener("DOMContentLoaded", function() {
  // Select the element by its ID
  const element = document.getElementsByClassName('revolution');

  // Calculate the X-coordinate (50% of the viewport width)
  const xCoordinate = (window.innerWidth / 2) - (element.offsetWidth / 2);

  // Set the element's left property to the calculated X-coordinate
  element.style.left = `${xCoordinate}px`;

  // Optionally, set the Y-coordinate (50% of the viewport height)
  const yCoordinate = (window.innerHeight / 2) - (element.offsetHeight / 2);
  element.style.top = `${yCoordinate}px`;
});
