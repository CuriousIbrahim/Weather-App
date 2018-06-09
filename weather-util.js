module.exports = function kToOtherUnit(kUnit, otherUnit) {
  if (otherUnit === 'c') {
    return kUnit - 273.15;
  } else if (otherUnit == 'f') {
    return (kUnit * 9 / 5) - 459.67;
  }
}
