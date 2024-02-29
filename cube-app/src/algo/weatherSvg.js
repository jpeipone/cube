export const weatherSvg = (value) => {
  if (value >= 7) {
    return `url('images/halfMoon.svg')`;
  } else if (value > 0) {
    return `url('images/squareSun.svg')`;
  } else if (value === 0) {
    return `url('images/cloudySun.svg')`;
  } else if (value < -7) {
    return `url('images/lightning3.svg')`;
  } else {
    return `url('images/snowFall.svg')`;
  }
};
