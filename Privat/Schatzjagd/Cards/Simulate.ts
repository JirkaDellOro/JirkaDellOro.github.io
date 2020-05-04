namespace Simulate {
  interface Result {
    hits: number;
    won: boolean;
    weapon: number;
    playerHealth: number;
    enemyHealth: number;
  }

  let iterations: number = 100000;
  //let playerWeapon: number = 4;
  let playerStrength: number = 15;
  let enemyPower: number = 25;
  let abrasion: boolean = true;

  let mapWeaponToResult: Object[] = [];

  for (let weapon: number = 0; weapon < 16; weapon++)
    mapWeaponToResult.push(simulate(iterations, weapon, playerStrength, enemyPower, abrasion));

  console.group(`Statistic enemy:${enemyPower}, strength:${playerStrength}`);
  console.table(mapWeaponToResult);


  // conditions
  function simulate(_iterations: number, _playerWeapon: number, _playerStrength: number, _enemyPower: number, _abrasion: boolean): Object {
    // statistic
    let results: Result[] = [];
    let wins: number = 0;
    let hitsToWin: number = 0;
    let hitsToLoose: number = 0;
    let weaponLost: number = 0;

    // simulation
    for (let i: number = 0; i < _iterations; i++) {
      let enemyHealth: number = 15;
      let playerHealth: number = 15;
      let weapon: number = _playerWeapon;
      let hits: number = 0
      while (enemyHealth > 0 && playerHealth > 0) {
        hits++;
        let playerRoll: number = Math.floor(Math.random() * 6 + 1);
        let enemyRoll: number = Math.floor(Math.random() * 6 + 1);
        let playerHit: number = _playerStrength + weapon + playerRoll;
        let enemyHit: number = _enemyPower + enemyRoll;
        if (_abrasion)
          weapon = Math.max(--weapon, 0);
        let diff: number = playerHit - enemyHit;
        if (diff > 0)
          enemyHealth -= diff;
        else
          playerHealth += diff;
        // console.log(playerHit, enemyHit, diff, playerHealth, enemyHealth);
      }

      let won: boolean = playerHealth > 0;
      if (won) {
        wins++;
        hitsToWin += hits;
      } else
        hitsToLoose += hits;

      weaponLost += (_playerWeapon - weapon);

      results.push({ hits: hits, won: won, playerHealth: playerHealth, enemyHealth: enemyHealth, weapon: _playerWeapon })
    }

    let stats: Object = { won: wins, lost: _iterations - wins, ratio: wins * 100 / _iterations, hitsToWin: hitsToWin / _iterations, hitsToLoose: hitsToLoose / _iterations, abrasion: weaponLost / _iterations };
    // console.table([stats]);
    // console.groupEnd();
    // console.groupCollapsed("Results");
    // console.table(results);
    // console.groupEnd();

    return stats;
  }
}