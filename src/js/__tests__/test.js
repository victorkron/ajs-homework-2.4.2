import Character from '../app';

const objAliveCharacter = {
  health: 100,
  defence: 12,
  attack: 12,
  level: 2,
};

const objDeadCharacter = {
  health: 0,
  defence: 10,
  attack: 10,
  level: 1,
};

const objStartCharacter = {
  health: 100,
  defence: 10,
  attack: 10,
  level: 1,
};

test('constructor', () => {
  const obj = new Character();
  expect(obj).toEqual(objStartCharacter);
});

describe('Character tests: ', () => {
  test.each([
    ['health > 0', 70, objAliveCharacter],
    ['health <= 0', 0, objDeadCharacter],
  ])(
    ('-> %s'),
    (name, inputData, expectation) => {
      const obj = new Character(inputData);
      obj.levelUp();

      expect(obj).toEqual(expectation);
    },
  );
});
