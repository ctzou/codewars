//https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

//R: Sum all numbers of two arrays, through reduce.
//E:  A: [1,2], A2: [2,3] sum=[8]
//    A: [5,2], A2: [5,3] sum=[15]
//    A: [6,3], A2: [9,1] sum=[19]

function arrayPlusArray(arr1, arr2) {
   return arr1.reduce((a, b)=>a+b,0)+arr2.reduce((a, b)=>a+b,0)
 }
 console.log(arrayPlusArray([1,2],[2,3]))