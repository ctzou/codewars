//https://www.codewars.com/kata/5513795bd3fafb56c200049e/javascript

function countBy(x, n) {
   let z = [];
   let i =0;
   let j =x;
   console.log(i)
   while (i<x*n){
     i=i+j;
     console.log(i)
     z.push(i)
   }
   return z;
 }

 console.log(countBy(1,10))