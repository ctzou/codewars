//https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/javascript

function repeatStr (n, s) {
   let newS = s
   for (i=1; i<n; i++){
     newS+=s;
   }
   return newS;
 }