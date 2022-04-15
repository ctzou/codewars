//https://www.codewars.com/kata/57f222ce69e09c3630000212

function well(x){
   if (x.filter(e=> e==='good').length >2){
     return 'I smell a series!';
   } else if (x.filter(e=> e==='good').length >=1){
     return 'Publish!';
   } else {
     return 'Fail!'
   }
 }