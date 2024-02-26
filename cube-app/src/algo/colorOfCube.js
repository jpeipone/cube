export function ColorOfCube(coin) {
  //green colors
  if (coin >= 7) {
    return "#006400";
  } else if (coin >= 1) {
    return "green";
  } else if (coin > 0) {
    return "#9BCF53";

    //0 value
  } else if (coin === 0) {
    return "black";
  } //red colors
  else if (coin <= -7) {
    return "#820300";
  } else if (coin <= -1) {
    return "red";
  } else {
    return "#F94A29";
  }
}
