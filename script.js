fetch('https://anapioficeandfire.com/api')
    .then(function(response){
        return response.json();
    })
    .then(function(myJson){
        console.log(JSON.stringify(myJson));
    });