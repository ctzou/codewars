//https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/javascript

/*function warnTheSheep(queue) {
return queue[queue.length-1]==='wolf' ? "Pls go away and stop eating my sheep" : "Oi! Sheep number 1! You are about to be eaten by a wolf!"
}*/
function warnTheSheep(queue) {
   let wolf = queue.indexOf('wolf')
   return queue.length-1===wolf ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${queue.length-1-wolf}! You are about to be eaten by a wolf!`
   }
