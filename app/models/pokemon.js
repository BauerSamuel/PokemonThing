




export default class Pokemon {
  constructor(data) {
    this.id = data.id
    this.name = data.name;
    this.hp = data.hp;
  }

  getCard(button) {

    return `<p>${this.name}</p>`
    //     return `<div class="container-inner">
    //   <div class="card card-pokemon card-fire">
    //     <div class="card-block">
    //       <div class="card-subtitle text-xs-right">${this.name} <strong>${this.health}</strong></div>
    //     </div>
    //     <img src="http://static7.comicvine.com/uploads/original/11127/111278010/5217966-mega-charizard-y-booster-packaging_72dpi-600x375-1403277971.png" alt="Pokecard Image"/>
    //     <div class="card-block">
    //       <h4 class="card-title">${this.name}<small>INFO HERE</small></h4>
    //       <p class="card-text"><strong>Pokemon Power</strong><i>Pokemon power info</i></p>
    //       </div>
    //       <ul class="list-group list-group-flush">
    //       <li class="list-group-item"><strong>ATTACK1</strong> ATTACK INFORMATION</li>
    //       </ul>
    //       ${button}
    //   </div>
    // </div>
    //    `
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