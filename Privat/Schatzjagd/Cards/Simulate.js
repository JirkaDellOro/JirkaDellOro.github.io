var Simulate;
(function (Simulate) {
    let iterations = 100000;
    //let playerWeapon: number = 4;
    let playerStrength = 15;
    let enemyPower = 25;
    let abrasion = true;
    let mapWeaponToResult = [];
    for (let weapon = 0; weapon < 16; weapon++)
        mapWeaponToResult.push(simulate(iterations, weapon, playerStrength, enemyPower, abrasion));
    console.group(`Statistic enemy:${enemyPower}, strength:${playerStrength}`);
    console.table(mapWeaponToResult);
    // conditions
    function simulate(_iterations, _playerWeapon, _playerStrength, _enemyPower, _abrasion) {
        // statistic
        let results = [];
        let wins = 0;
        let hitsToWin = 0;
        let hitsToLoose = 0;
        let weaponLost = 0;
        // simulation
        for (let i = 0; i < _iterations; i++) {
            let enemyHealth = 15;
            let playerHealth = 15;
            let weapon = _playerWeapon;
            let hits = 0;
            while (enemyHealth > 0 && playerHealth > 0) {
                hits++;
                let playerRoll = Math.floor(Math.random() * 6 + 1);
                let enemyRoll = Math.floor(Math.random() * 6 + 1);
                let playerHit = _playerStrength + weapon + playerRoll;
                let enemyHit = _enemyPower + enemyRoll;
                if (_abrasion)
                    weapon = Math.max(--weapon, 0);
                let diff = playerHit - enemyHit;
                if (diff > 0)
                    enemyHealth -= diff;
                else
                    playerHealth += diff;
                // console.log(playerHit, enemyHit, diff, playerHealth, enemyHealth);
            }
            let won = playerHealth > 0;
            if (won) {
                wins++;
                hitsToWin += hits;
            }
            else
                hitsToLoose += hits;
            weaponLost += (_playerWeapon - weapon);
            results.push({ hits: hits, won: won, playerHealth: playerHealth, enemyHealth: enemyHealth, weapon: _playerWeapon });
        }
        let stats = { won: wins, lost: _iterations - wins, ratio: wins * 100 / _iterations, hitsToWin: hitsToWin / _iterations, hitsToLoose: hitsToLoose / _iterations, abrasion: weaponLost / _iterations };
        // console.table([stats]);
        // console.groupEnd();
        // console.groupCollapsed("Results");
        // console.table(results);
        // console.groupEnd();
        return stats;
    }
})(Simulate || (Simulate = {}));
