export const weatherSvg = (value) => {
  if (value >= 7) {
    return `url('images/halfMoon.svg')`;
  } else if (value > 1) {
    //return `url('images/squareSun.svg')`;
    return `url('images/sun.svg')`;
  } else if (value > 0) {
    return `url('images/cloudyClouds.svg')`;
  } else if (value < -4) {
    return `url('images/lightning3.svg')`;
  } else if (value < -2) {
    return `url('images/rains.svg')`;
  } else {
    return `url('images/snowFall.svg')`;
  }
};
