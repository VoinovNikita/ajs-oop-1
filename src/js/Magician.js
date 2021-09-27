/* eslint-disable linebreak-style */
import Character from '..';

export default class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    this.name = name;
    this.type = type;
    this.attack = 10;
    this.defence = 40;
  }
}
