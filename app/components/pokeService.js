//Private
import Pokemon from "../models/pokemon.js";


let _pokeAPI = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/'
})

let _sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/Samuel/heroes'
})

let _state = {
  apiPokemon: [],
  activePokemon: {},
  myPokemon: []
}

let _subs = {
  apiPokemon: [],
  activePokemon: [],
  myPokemon: []
}

function setState(prop, data) {
  _state[prop] = data;
  _subs[prop].forEach(fn => fn());
}

//Public
export default class PokeService {
  addSubscriber(prop, fn) {
    _subs[prop].push(fn);
  }

  get ApiPokemon() {
    return _state.apiPokemon.map(p => p);
  }

  get Active() {
    return _state.activePokemon
  }

  get MyPokemon() {
    return _state.myPokemon.map(p => new Pokemon(p));
  }

  getApiData() {
    _pokeAPI.get(`?offset=0&limit=964`)
      .then(res => {
        setState('apiPokemon', res.data.results)
      })
  }

  getDetails(url) {
    _pokeAPI.get(url)
      .then(res => {
        let data = new Pokemon(res.data)
        console.log(data)
        setState('activePokemon', data)
      })
  }

  showDetails(id) {
    let pokemon = _state.myPokemon.find(p => p._id == id)
    setState('activePokemon', pokemon)
  }



  setActive(name) {
    //make a new get request to get all the details of the pokemon
    //with the response you will save the data to your state as the target/active pokemon

    _pokeAPI.get(name)
      .then(res => {
        // let data = res.data.results.filter(p => p.name == name)
        // console.log("data is " + data.name)
        setState('activePokemon', res.data)
      })
      .catch(err => console.log(err))
  }

  //Need to add and remove pokemon from myteam
  addToTeam() {
    let pokemon = _state.myPokemon.find(p => p.name == _state.activePokemon.name)
    if (!pokemon) {
      _state.myPokemon.push(_state.activePokemon)
      _subs.myPokemon.forEach(fn => fn())
    }
  }
}

//     }
//     //Now send the found pokemon to sandbox server.
//     _sandbox.post('', pokemon)
//       .then(res => {
//         this.getMyTeamData();
//       })
//       .catch(err => console.log(err))
//   }

//   getMyTeamData() {
//     _sandbox.get()
//       .then(res => {
//         let data = res.data.data.map(p => new Pokemon(p))
//         setState('myPokemon', data)
//       })
//       .catch(err => console.log(err))
//   }


//   removeFromTeam(id) {
//     debugger
//     _sandbox.delete(id)
//       .then(res => {
//         this.getMyTeamData()
//       })
//       .catch(err => console.log(err))
//   }

// }