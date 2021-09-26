/* eslint-disable no-multi-assign */
// eslint-disable-next-line max-classes-per-file
export default class Character {
  constructor(name, type) {
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Ошибка. Имя должно содержать не больше 10 и не меньше 2 символов.');
    }
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (types.indexOf(type) === -1) {
      throw new Error('Ошибка. такого тип не существует.');
    } else {
      this.type = type;
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


// eslint-disable-next-line no-unused-vars
export class Bowerman extends Character {
  constructor(name, type) {
    super(name, type);
    this.name = name;
    this.type = type;
    this.attack = 25;
    this.defence = 25;
  }
}


// eslint-disable-next-line no-unused-vars
export class Swordsman extends Character {
  constructor(name, type) {
    super(name, type);
    this.name = name;
    this.type = type;
    this.attack = 40;
    this.defence = 10;
  }
}


// eslint-disable-next-line no-unused-vars
export class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    this.name = name;
    this.type = type;
    this.attack = 10;
    this.defence = 40;
  }
}


// eslint-disable-next-line no-unused-vars
export class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
    this.name = name;
    this.type = type;
    this.attack = 10;
    this.defence = 40;
  }
}


// eslint-disable-next-line no-unused-vars
export class Undead extends Character {
  constructor(name, type) {
    super(name, type);
    this.name = name;
    this.type = type;
    this.attack = 25;
    this.defence = 25;
  }
}


// eslint-disable-next-line no-unused-vars
export class Zombie extends Character {
  constructor(name, type) {
    super(name, type);
    this.name = name;
    this.type = type;
    this.attack = 40;
    this.defence = 10;
  }
}
