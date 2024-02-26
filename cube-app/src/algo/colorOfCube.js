export function ColorOfCube(coin) {
  //green colors
  if (coin >= 5) {
    return "green";
  } else if (coin >= 1) {
    return "#76BA1B";
  } else if (coin > 0) {
    return "#66C959";

    //0 value
  } else if (coin === 0) {
    /*  return "#595959"; */
    return "orange";
  } //red colors
  else if (coin <= -5) {
    return "#820300";
  } else if (coin <= -1) {
    return "red";
  } else {
    return "#F94A29";
  }
}
