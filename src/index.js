/* eslint-disable no-multi-assign */
// eslint-disable-next-line max-classes-per-file
const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
export default class Character {
  constructor(name, type) {
    this.health = 100;
    this.level = 1;
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Ошибка. Имя должно содержать не больше 10 и не меньше 2 символов.');
    }
    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Ошибка. такого типа не существует.');
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.level = this.level += 1;
      this.health = 100;
      this.attack = this.attack *= 1.2;
      this.defence = this.defence *= 1.2;
    } else {
      throw new Error('Нельзя повысить левел умершего');
    }
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
