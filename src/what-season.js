const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(Date) {
 if (Date === null || Date == undefined) return 'Unable to determine the time of year!';
 if (typeof Date !== 'object') {throw new Error('Hello, this is error')};
 if ((Date.getMonth() === 0) || (Date.getMonth() === 1) || (Date.getMonth() === 2)) return 'winter';
 if (Date.getMonth() === 3 || Date.getMonth() === 4 || Date.getMonth() === 5) return 'spring';
 if (Date.getMonth() === 6 || Date.getMonth() === 7 || Date.getMonth() === 8) return 'fall';
 if (Date.getMonth() === 9 || Date.getMonth() === 10 || Date.getMonth() === 11) return 'autumn';
};
