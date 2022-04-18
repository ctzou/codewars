//https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/javascript

function twoSort(s) {
   let newS = s.sort()
   return newS[0].split('').join('***')
 }