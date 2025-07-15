
const compass = document.getElementById('compass');
const angles = {
  N: 0,
  NE: 45,
  E: 90,
  SE: 135,
  S: 180,
  SW: 225,
  W: 270,
  NW: 315
};
function rotateTo(direction) {
  const angle = angles[direction];
  compass.style.transform = `rotate(${angle}deg)`;
}
