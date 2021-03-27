const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arrayCats) {
  if (typeof arrayCats === undefined || arrayCats === null) return 0;
  let catsCount = 0;
  for (let i=0; i < arrayCats.length; i++) {
    for (let k=0; k < arrayCats[i].length; k++) {
      if (arrayCats[i][k] === "^^") {
      catsCount = catsCount + 1;
      }
    } 
  }
  return catsCount;
};
