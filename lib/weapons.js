const Player = require('./Player.js')

class Weapon {
    constructor(name) {
        this.types = ['sword', 'spear', 'mace'];
        this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
    
        if (this.name === 'sword') {
          this.value = 3;
        if (this.name === 'spear') {
            this.value = 5;
        if (this.name === 'mace') {
            this.value = 8;
          }  else {
            return false;
        }
        }
      }
    }
}

module.exports = Weapon



























module.exports = Weapon;