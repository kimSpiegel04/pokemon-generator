


fetch('https://pokeapi.co/api/v2/pokemon/26/')

    .then(function (response){
        return response.json();
    }).then(function (data){

        // console.log(data);
        
        //name
        document.getElementById('name').innerHTML = data.name;

        // sprite 
        var img = document.createElement('img');
        img.src = data.sprites.front_default;
        document.getElementById('sprite').appendChild(img);

        //index no.
        document.getElementById('num').innerHTML = data.id;

        //types
        let typeArr = []
        for(var i=0; i<data.types.length; i++){
            typeArr.push(data.types[i].type.name);
        }
        document.getElementById('type').innerHTML = typeArr.join(', ');

        //base stats
        let hp = data.stats[5].base_stat;
        let speed = data.stats[0].base_stat;
        let attack = data.stats[4].base_stat;
        let defense = data.stats[3].base_stat;
        let specialAttack = data.stats[2].base_stat;
        let specialDefence = data.stats[1].base_stat;
        let total = hp + speed + attack + defense + specialAttack + specialDefence;

        document.getElementById('hp').innerHTML = hp;
        document.getElementById('speed').innerHTML = speed;
        document.getElementById('att').innerHTML = attack;
        document.getElementById('def').innerHTML = defense;
        document.getElementById('sp-att').innerHTML = specialAttack;
        document.getElementById('sp-def').innerHTML = specialDefence;
        document.getElementById('total').innerHTML = total;

    })

fetch('https://pokeapi.co/api/v2/pokemon/26/encounters')

    .then(function (response){
        return response.json();
    }).then(function (data){

        console.log(data);

    })