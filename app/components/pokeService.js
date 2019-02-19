//Private
import Pokemon from "../models/pokemon.js";

let _lim = '964';

let _pokeAPI = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/'
})

let _sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/Samuel/pokemon'
})

let _state = {
  apiPokemon: [],
  myPokemon: []
}

let _subs = {
  apiPokemon: [],
  myPokemon: []
}

function setState(prop, data) {
  _state[prop] = data;
  _subs[prop].forEach(fn => fn());
}

//public
export default class PokeService {
  addSubscriber(prop, fn) {
    _subs[prop].push(fn);
  }

  get ApiPokemon() {
    return _state.apiPokemon.map(p => new Pokemon(p));
  }

  get MyPokemon() {
    return _state.myPokemon.map(p => new Pokemon(p));
  }

  //Need to add and remove pokemon from myteam
  addToTeam(id) {
    let pokemon = _state.apiPokemon.find(pokemon => pokemon.id == id)
    let myPokemon = _state.myPokemon.find(p => p.name == pokemon.name)
    if (myPokemon) {
      alert('Can\'t duplicate. Catch a different pokemon.')
    }
    //Now send the found pokemon to sandbox server.
    _sandbox.post('', pokemon)
      .then(res => {
        this.getMyTeamData();
      })
      .catch(err => console.log(err))
  }

  getMyTeamData() {
    debugger;
    _sandbox.get()
      .then(res => {
        let data = res.data.results.map(p => new Pokemon(p))
        setState('myPokemon', data)
      })
      .catch(err => console.log(err))
  }

  //`offset=0&limit=${_lim}`
  getApiData() {
    _pokeAPI.get(`?offset=0&limit=${_lim}`)
      .then(res => {
        let data = res.data.results.map(p => new Pokemon(p))
        setState('apiPokemon', data)
      })
      .catch(err => console.log(err))
  }

  removeFromTeam(id) {
    _sandbox.delete(id)
      .then(res => {
        this.getMyTeamData()
      })
      .catch(err => console.log(err))
  }

}