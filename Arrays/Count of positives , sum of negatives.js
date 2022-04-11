function countPositivesSumNegatives(input) {
   let posCount =0;
   let sum =0;
   if (input === null || input.length === 0){
     return [];
   } else {
     input.forEach((num, idx)=> (num>0) ? posCount++ : sum +=num )
     return [posCount,sum];
     }
   ;
 }

 //https://www.codewars.com/kata/576bb71bbbcf0951d5000044/javascript