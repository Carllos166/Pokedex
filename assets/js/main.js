
function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                    <ol class="types">
                <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                    alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')


// aguardando uma promise = assíncrono

pokeApi.getPokemons().then((pokemons = []) => {
    const listItens = []

    const newList = pokemons.map((pokemon) => { // map((value, index, array))
        return convertPokemonToLi(pokemon)
    })
    const newHTML = newList.join('')

    pokemonList.innerHTML += newHTML
})