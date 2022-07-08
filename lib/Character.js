class Character {
  constructor(name = '') {
    this.name = name;
    this.health = 105;
    this.strength = 7;
    this.agility = 7;
  }

  isAlive() {
    if (this.health === 0) {
      return false;
    }
    return true;
  }

  getHealth() {
    return `${this.name}'s health is now ${this.health}!`;
  }

  getAttackValue() {
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max - min) + min);
  }

  DodgeChance() {
    if (Agility <= 100)
  DodgeChance = Agility * 0.001;
    else if (Agility <= 500)
  DodgeChance = (Agility - 100) * 0.00025 + 0.1;
    else if (Agility <= 1000)
  DodgeChance = (Agility - 500) * 0.0002 + 0.2;
    else if (Agility <= 8000)
  DodgeChance = (Agility - 1000) * 0.0001 + 0.3;
    else
  DodgeChance = 1;

  }

  reduceHealth(health) {
    this.health -= health;

    if (this.health < 0) {
      this.health = 0;
    }
  }
}

module.exports = Character;
