var player1 = "";
var player2 = "";
var player1Url = localStorage.getItem('Player 1');
var player2Url = localStorage.getItem('Player 2');

fetch(player1Url)
.then( (response) => { return response.json()})
.then( (result) => {
    player1 = result.aliases[0]
})


fetch(player2Url)
.then( (response) => { return response.json()})
.then( (result) => {
    player2 = result.aliases[0]
})


// I think we can save the image number in here also

var turn = 1;

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
};

var terning = document.getElementById("diceRoll");
terning.onclick = function(){
    var result = roll.throw();
    showPrint(result);
    moveIcons(result);
};


var tile = 1;
var playerTile = document.getElementById(tile);


//        tile.appendchild(playOne);
function moveIcons(result){
    if(turn === 1) {
        turn = 2;
        //moving stuff for player one
    }
    else{
    turn = 1;
        //moving stuff for player two
    }
  for( var i = 0; i < result; i++ ){
    tile = tile + 1;

    console.log("Tile: " + tile);
  }
  playerTile = document.getElementById(tile);
  console.log(playerTile);
};