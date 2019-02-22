export default class Pokemon {
  constructor(data) {
    this._id = data._id || data.id
    this.name = data.name;
    this.url = data.url || data.sprites.front_default
    console.log(data)
    this.hp = data.hp || data.stats[5].base_stat
    this.move1 = data.move1 || data.moves[0].move.name
    this.move2 = data.move2 || data.moves[1].move.name
    this.type1 = data.type1 || data.types[data.types.length - 1].type.name
  }



  getCard() {
    return `
    <div class="container-inner">
      <div class="${this.type1} card" style="max-width: 30vw;">
        <div class="card-block text-center">
          <div class="card-subtitle row text-center"> <div class="col-3 text-left">#${this._id}</div><div class ="col-6 text-left"><h3>${this.name}</h3></div> <div class="col-3 text-center"><strong>${this.hp}HP</strong></div></div>
        </div>
        <img src="${this.url}" style="display: block; width: 100%; height: auto"/>
        <hr>
        <div class="text-center">

        </div>
        <div class="${this.type1}">
          <ul class="${this.type1} list-group list-group-flush">
          <li class="${this.type1} list-group-item"><strong>${this.move1}</strong></li>
          <li class="${this.type1} list-group-item"><strong>${this.move2}</strong></li>
          </ul>
          </div>
          </div>
      </div>
    </div>
       `
  }
}

// <!-- <div class="container-inner">
// <div class="card card-pokemon card-fire">
//   <div class="card-block">
//     <div class="card-subtitle text-xs-right">Evolves from Charmeleon - <strong>120HP</strong></div>
//   </div>
//   <img src="http://static7.comicvine.com/uploads/original/11127/111278010/5217966-mega-charizard-y-booster-packaging_72dpi-600x375-1403277971.png" alt="Pokecard Image">
//     <div class="card-block">
//       <h4 class="card-title">Charizard<small>Flame Pokemon. Length 5' 7", Weight: 200 lbs.</small></h4>
//       <p class="card-text"><strong>Pokemon Power: Energy Burn</strong> As often as you like during your turn (<i>before your attack</i>), you may turn all Energy attached to Charizard into flame Energy for the rest of the turn. This power can't be used if Charizard is Asleep, Confused or Paralyzed.</p>
//     </div>
//     <ul class="list-group list-group-flush">
//       <li class="list-group-item"><strong>Fire Spin</strong> Discard 2 Energy cards attached to Charizard in order to use this attack.</li>
//     </ul>
//   </div>
// </div>--->