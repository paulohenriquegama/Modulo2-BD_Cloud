const cardPokemons = document.querySelectorAll('.card_pokemon')
const pokemonSelecionado = document.querySelector('#pokemon_selecionado')



function selecionaElemento () {
    console.log("Entrou aqui")
    const nomePokemon = this.getAttribute('data-nome');

    if (!this.classList.contains("selecionado")) {
        this.classList.add("selecionado")
        pokemonSelecionado.innerHTML = `O último pokemon seconado foi <b> ${nomePokemon}</b>!`
        this.style.border = "2px solid blue";
        this.style.margin = "-2px"
        console.log(this)
    } else {
        this.classList.remove('selecionado');
        this.style.border = "none";
        this.style.margin = "0px"

        const pokemonSelecionados = document.querySelectorAll('.selecionado');

        if (pokemonSelecionados.length >= 1) {
            pokemonSelecionado.innerHTML = `Você desmarcou o pokemon <b>${nomePokemon}</b>. Restantes: <b> ${pokemonSelecionados.length}</b>`;
            

        } else {

            pokemonSelecionado.innerHTML = "Selecione um pokemon"
        }


    }

}

for (const cardPokemon of cardPokemons) {
    cardPokemon.addEventListener("click", selecionaElemento )


}