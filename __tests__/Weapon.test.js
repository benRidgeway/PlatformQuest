const Weapon = require('../lib/weapons.js');
const Player = require('../lib/Player.js');



test ('creates a sword object', () => {
 const weapon = new Weapon ('sword');

 expect(weapon.name).toBe('sword');
 expect(weapon.value).toEqual(expect.any(Number));
});

test ('create damage', () => {
    const player = new Player;
    const weapon = new Weapon ('sword');
    const damage = player.strength + weapon.value;

    expect(weapon.value).toBe(3);
    expect(player.strength).toBe(7);

    expect(damage).toBe(10);
});

