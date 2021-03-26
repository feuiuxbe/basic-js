const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arrayCats) {
  for (let i=0; i < arrayCats.length; i++) {
    for (let k=0; k < arrayCats[i].length; k++) {
      var stringToArray = arrayCats[i][k].toString();
    }
  }
  if (stringToArray.search("^^") === -1) return 0;
  let catsCount = 0;
  for (let i=0; i < stringToArray.length; i++) {
    if (stringToArray.search("^^")) {
      catsCount = catsCount + 1;
    } else {
      return catsCount;
    }
  }
};
