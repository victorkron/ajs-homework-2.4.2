// TODO: write your code here

/**
  * Родительский класс
  *
  * @param {number} health - здоровье персонажа
  * @param {number} defence - защита персонажа
  * @param {number} attack - атака персонажа
  * @param {number} level - уровень персонажа
  */
export default class Character {
  constructor(health = 100, defence = 10, attack = 10, level = 1) {
    this.health = health;
    this.defence = defence;
    this.attack = attack;
    this.level = level;
  }

  levelUp() {
    try {
      if (this.health <= 0) {
        throw new Error('Мертвый персонаж');
      } else {
        this.health = 100;
        this.level += 1;
        this.defence *= 1.2;
        this.attack *= 1.2;
      }
    } catch (e) {
      console.error(e);
    }
  }
}
