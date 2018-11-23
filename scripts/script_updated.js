var counter = 0;
fetch('https://anapioficeandfire.com/api/characters')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        createCharacters(myJson);
    });

function createCharacters(characters){
    console.log(characters);
    var cardContainer = document.getElementById('characterCardsContainer');
    for(var i = 0; i < characters.length; i++){
        var characterCard = '<div class="[ col-sm-4 ]">' +
            '<div><img src="icons/'+ [i] +'.png" /></div>'+
            '<div> name '+ characters[i].aliases[0] +'</div>' +
            '<div> gender '+ characters[i].gender +'</div>' +
            '<div><button onclick="selectCharacter('+"'"+ characters[i].url+"'"+')">Click Me</button></div>'+
        '</div>';
        cardContainer.innerHTML += characterCard;
    }
}

function selectCharacter(url){
    if(counter < 2){
        counter++;
        if(counter === 1 ) {
            localStorage.setItem('Player 1', url);
        }
        else{
            localStorage.setItem('Player 2', url);
            // Oda you need to create a redirect to the board games page
        }
    }
    else{
        alert('You can only choose two players')
    }
    // We need to see a character is clicked
    // save the url to local storage
    // redirect to new page.
}
