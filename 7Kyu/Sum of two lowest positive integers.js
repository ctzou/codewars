//https://www.codewars.com/kata/558fc85d8fd1938afb000014/javascript

function sumTwoSmallestNumbers(numbers) {  
   const arr =numbers.sort((a,b)=>a-b)
   return arr[0]+arr[1]
 }