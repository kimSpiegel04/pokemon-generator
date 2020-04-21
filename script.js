


fetch('https://pokeapi.co/api/v2/pokemon/12/')

    .then(function (response){
        return response.json();
    }).then(function (data){

        console.log(data);
        
        //name
        document.getElementById('name').innerHTML = data.name;

        // sprite 
        var img = document.createElement('img');
        img.src = data.sprites.front_default;
        document.getElementById('sprite').appendChild(img);

        //index no.
        document.getElementById('num').innerHTML = data.id;

        //types
        // console.log(data.types);
        // for(var i=0; i<data.types.length; i<0){
        //     console.log(data.types[i]);
        // }

        //moves
    })

