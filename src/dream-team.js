const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(membersArray) {
  /* общая логика:
  if not membersArray - false
  Array должен содержать strings (и только их)
  Если не стрингс - игнорировать 
  В каждой стрингс найти первую букву (могут начинаться с пробелов)
  Объединить первые буквы в строку
  Поднять все буквы в строке до верхнего регистра
  Отсортировать все буквы в верхнем регистре от А до Зет
  Вернуть результат сортировки 
  */
};
