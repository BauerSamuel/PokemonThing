//Private
import PokeService from "./pokeService.js";

let _pokeService = new PokeService();


// function to draw all pokemon
function drawPokemon() {
  let template = ''
  _pokeService.ApiPokemon.forEach(p => {
    template += `
        <button type="button" class="btn btn-success btn-outline btn-lg btn-block"onclick="app.controllers.pokeController.getDetails('${p.url}')">${p.name}</button>
    `
  })
  document.querySelector('.api-pokemon').innerHTML = template;
}

function drawDetailed() {
  document.querySelector('.details').innerHTML = _pokeService.Active.getCard()
  // let template = ''

  // let pokemon = _pokeService.Active

  // console.log("image url is: " + pokemon.sprites.back_default);
  // // pokemon.forEach(p => {
  // // if (p.name == name) {
  // template = pokemon.getCard();
  // // }
  // // })
  // document.querySelector('.details').innerHTML = template;
}
function drawMyTeam() {
  let template = ''
  _pokeService.MyPokemon.forEach(p => {
    template += `
    <li> onclick="app.controllers.pokeController.showDetails('${p._id}')">${p.name}</li>
    `
  })
  document.querySelector('.my-pokemon').innerHTML = template;

  //   let template = ''
  //   let pokemon = _pokeService.ApiPokemon
  //   pokemon.forEach(p => {
  //     template += `
  //     <div class="col-3">
  //     <button class="btn btn-primary">${p.name}</button>
  //     </div>
  //     `
  //   })
  //   document.querySelector('.api-pokemon').innerHTML = template;
}
export default class PokeController {
  constructor() {
    //add subscribers here and get the APIs here too
    _pokeService.addSubscriber('apiPokemon', drawPokemon)
    _pokeService.addSubscriber('activePokemon', drawDetailed)
    _pokeService.addSubscriber('myPokemon', drawMyTeam)

    _pokeService.getApiData();
    // _pokeService.getMyTeamData();

  }

  getDetails(url) {
    _pokeService.getDetails(url)
  }

  showDetails(id) {
    _pokeService.showDetails(id)
  }

  addToTeam() {
    _pokeService.addToTeam()
  }

  // removeFromTeam(id) {
  //   _pokeService.removeFromTeam(id)
  // }
}

