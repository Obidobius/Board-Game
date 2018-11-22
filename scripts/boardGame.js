//DICE ROLL

//Test five
var roll = {
    corners: 6,
    throw: function(){
        var randomTrow = Math.floor(Math.random()* this.corners) +1;
        return randomTrow;
    }
}
function showPrint(result){
    var dicePlacement = document.getElementById("dicePlacement");
    console.log(result);
    dicePlacement.innerHTML = result;
}

var terning = document.getElementById("diceRoll");
terning.onclick = function(){
    var result = roll.throw();
    showPrint(result);
    moveIcons(result);
};

var playerOne
var playerTwo
var tile = 1;
var playerTile = document.getElementById(tile);


function moveIcons(result){
  for( var i = 0; i < result; i++ ){
    tile = tile + 1;
    console.log("Tile: " + tile);
  }
  playerTile = document.getElementById(tile);
  console.log(playerTile);
}