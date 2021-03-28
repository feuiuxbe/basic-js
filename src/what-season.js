const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(seasonDate) {
 if (seasonDate === null || seasonDate == undefined) return 'Unable to determine the time of year!';
 if (typeof seasonDate !== 'object') {throw new Error('Hello, this is error')};
 if (Object.prototype.toString.call(seasonDate) !== '[object Date]'){throw new Error('Hello, this is tricky error');}
 if (seasonDate.getMonth() === 11 || seasonDate.getMonth() === 0 || seasonDate.getMonth() === 1) return 'winter';
 if (seasonDate.getMonth() === 2 || seasonDate.getMonth() === 3 || seasonDate.getMonth() === 4) return 'spring';
 if (seasonDate.getMonth() === 5 || seasonDate.getMonth() === 6 || seasonDate.getMonth() === 7) return 'summer';
 if (seasonDate.getMonth() === 8 || seasonDate.getMonth() === 9 || seasonDate.getMonth() === 10) return 'fall';
};
