/* eslint-disable linebreak-style */
import Character from '../Character';

export default class Bowerman extends Character {
  constructor(name, type) {
    super(name, type);
    this.name = name;
    this.type = type;
    this.attack = 25;
    this.defence = 25;
  }
}
