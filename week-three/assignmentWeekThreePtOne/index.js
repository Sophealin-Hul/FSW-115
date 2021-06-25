const xhr = new XMLHttpRequest();
xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/", true);
xhr.send();

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
        let poke = JSON.parse(xhr.responseText);
        showPokemon(poke.results);
    }
    else if(xhr.readyState === 4 && xhr.status !== 200) {
        console.log(xhr.responseText);
    };
}
function showPokemon(poke) {
    for(let i = 0; i < poke.length; i++) {
        const pokemon = document.createElement("h3");
        pokemon.textContent = poke[i].name;
        document.body.appendChild(pokemon);
    };
};