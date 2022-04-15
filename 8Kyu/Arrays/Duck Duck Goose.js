//https://www.codewars.com/kata/582e0e592029ea10530009ce/javascript

function duckDuckGoose(players, goose) {
   return goose % players.length === 0 ? players[players.length-1].name : players[goose % players.length-1].name
 }