//https://www.codewars.com/kata/56b29582461215098d00000f/javascript

function pipeFix(numbers){
   //get first and last num in array; return new array w/ numbers from low to high
     let numArray =[]
     for (i=0; i<(numbers[numbers.length-1] - numbers[0]+1); i++){
       numArray[i] = (numbers[0]+i)
     }  
     return numArray
   }