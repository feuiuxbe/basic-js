const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arrayToCalculate) {
    let count = 0;
    let depth = 0;
    if (Array.isArray(arrayToCalculate)){
      for (let el of arrayToCalculate){
        count = this.calculateDepth(el);
        if (count > depth) {
          depth = count;
          count = 0;
        }
      }
      return depth+1;
    } 
    else {
      return 0;
    }
  }
};