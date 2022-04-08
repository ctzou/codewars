//https://www.codewars.com/kata/55d277882e139d0b6000005d/javascript

var findAverage = function (nums) {
   return nums.reduce((prev, curr) => prev + curr, 0) / nums.length;
 }