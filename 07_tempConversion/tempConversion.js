const convertToCelsius = function(f) {
  return +((f - 32) * 5 / 9).toFixed(1);
};

const convertToFahrenheit = function(c) {
  return +((c * 9 / 5) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
