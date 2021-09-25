import Character, {
  Bowerman, Swordsman, Magician, Daemon, Undead, Zombie,
} from '../../index';


test('1 test', () => {
  const result = new Character('Nikita', 'Bowman');

  const expected = {
    name: 'Nikita', type: 'Bowman', health: 100, level: 1,
  };

  expect(result).toEqual(expected);
});

test('2 test', () => {
  // eslint-disable-next-line no-new
  expect(() => { new Character('Nikita', 'slark'); }).toThrow(Error);
});

test('3 test', () => {
  // eslint-disable-next-line no-new
  expect(() => { new Character('L', 'Swordsman'); }).toThrow(Error);
});

test('4 test', () => {
  const result = new Bowerman('hek777', 'Bowman');

  const expected = {
    name: 'hek777', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  };
  expect(result).toEqual(expected);
});

test('5 test', () => {
  const result = new Swordsman('injun', 'Swordsman');

  const expected = {
    name: 'injun', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  };
  expect(result).toEqual(expected);
});

test('6 test', () => {
  const result = new Magician('mag', 'Magician');

  const expected = {
    name: 'mag', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  };
  expect(result).toEqual(expected);
});

test('7 test', () => {
  const result = new Daemon('Demon', 'Daemon');

  const expected = {
    name: 'Demon', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  };
  expect(result).toEqual(expected);
});

test('8 test', () => {
  const result = new Undead('qwerty', 'Undead');

  const expected = {
    name: 'qwerty', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  };
  expect(result).toEqual(expected);
});

test('9 test', () => {
  const result = new Zombie('zombie789', 'Zombie');

  const expected = {
    name: 'zombie789', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  };
  expect(result).toEqual(expected);
});
