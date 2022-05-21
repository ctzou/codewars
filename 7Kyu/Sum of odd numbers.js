//https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/javascript

function rowSumOddNumbers(n) {
   let odds =0;
   let oddArray =[]
   let num =1;
   for (i=0;i<=n;i++){
     odds=odds+i
   }
   for (i=1;i<=odds;i++){
     oddArray.push(num)
     num+=2
   }
   return oddArray.slice(odds-n).reduce((prev,curr)=>prev+curr,0)
   //input numbers only, return sum, 2=>8, 3=>27
   //take in input, create array with for loop of odd numbers till 
   //numbers added in other for loop
   //sum
 } 