import PokeController from "./components/pokeController";

class App {
  constructor() {
    this.controllers = {
      pokeController: new PokeController()
    }
  }
}


window['app'] = new App;