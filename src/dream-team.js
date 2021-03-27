const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(membersArray) {
  /* общая логика:
  (V) if membersArray not Array - false
  Array должен содержать strings (и только их), если не стрингс - игнорировать 
  В каждой стрингс найти первую букву (могут начинаться с пробелов)
  Объединить первые буквы в строку
  Поднять все буквы в строке до верхнего регистра
  Отсортировать все буквы в верхнем регистре от А до Зет
  Вернуть результат сортировки 
  */
  if (Array.isArray(membersArray) === false) return false;
  var newArrayFrom_membersArray = [];
  for (let i=0; i < membersArray.length; i++) {
    if (typeof membersArray[i] === 'string') {
      if (membersArray[i].charAt(0).match("[A-Za-z]")) {
        newArrayFrom_membersArray = newArrayFrom_membersArray + membersArray[i].charAt(0).toUpperCase(); 
      } 
      else {
        for (let k = 0; k < membersArray[i].length; k++) {
          if (membersArray[i].charAt(k).match("[A-Za-z]")) {
            newArrayFrom_membersArray = newArrayFrom_membersArray + membersArray[i].charAt(k).toUpperCase(); 
          }
        }
      }
    }
  }
  return newArrayFrom_membersArray.split('').sort().join('');
};
