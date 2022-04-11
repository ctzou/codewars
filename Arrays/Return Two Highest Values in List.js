//https://www.codewars.com/kata/57ab3c09bb994429df000a4a/javascript

function twoHighest(arr) {
   return [... new Set(arr)].sort((a,b)=>b-a).slice(0,2)
 }

/*function twoHighest(arr) {
   let sortedArr =arr.sort((a,b)=> a-b)
   let newArr=[sortedArr[0]]
   sortedArr.forEach((num)=> {
      if(num>=newArr[0]){
         newArr[0].push(num);
      }})
   console.log(newArr)

 }*/
//if greater than or equal x, push 
twoHighest([])
twoHighest([15])
twoHighest([15, 20, 20, 17])
//did not complete 