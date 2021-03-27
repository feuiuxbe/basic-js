const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (
      (typeof sampleActivity !== 'string') ||
      (sampleActivity.match("[^0-9]")) ||
      (sampleActivity.length === 0)
     ) return false;
  var sampleActivityToNumber = parseInt(sampleActivity, 10);
  if (sampleActivityToNumber <= 0 && sampleActivityToNumber > 10) {
    return false;
  }
  // if (typeof sampleActivityToNumber !== 'number') return false;
  var result = Math.ceil(
    (Math.log(MODERN_ACTIVITY / sampleActivityToNumber)) / (0.693 / HALF_LIFE_PERIOD)
  );
  if (result <= 0 || result > 1000000) return false;
  return result;
};
