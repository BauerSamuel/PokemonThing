//Private
import PokeService from "./pokeService";

let _pokeService = new PokeService();


// function to draw all pokemon
function drawPokemon() {
  let template = '';
  let pokemon = _pokeService.ApiPokemon
  pokemon.forEach(p => {
    let button = `
    <button class="btn btn-primary" onclick="app.controllers.pokeController.addToTeam('${p.id}')">ADD TO TEAM</button>
    `
    template += p.getCard(button);
  })
  document.querySelector('.api-pokemon').innerHTML = template;
}

// function to draw my pokemon
function drawMyTeam() {
  let template = ''
  let pokemon = _pokeService.MyPokemon
  pokemon.forEach(p => {
    let button = `
    <button class="btn btn-primary" onclick="app.controllers.pokeController.deleteFromTeam('${p.id}')">REMOVE FROM TEAM</button>
    `
    template += p.getCard(button);
  })
  document.querySelector('.my-pokemon').innerHTML = template;
}

export default class PokeController {
  constructor() {
    //add subscribers here and get the APIs here too
    _pokeService.addSubscriber('apiPokemon', drawPokemon)
    _pokeService.addSubscriber('myPokemon', drawMyTeam)

    _pokeService.ApiPokemon;
    _pokeService.MyPokemon;

  }
  //add and remove from team functions
  addToTeam(id) {
    _pokeService.addToTeam(id)
  }
  removeFromTeam(id) {
    _pokeService.removeFromTeam(id)
  }
}

