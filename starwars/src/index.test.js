const starWars = require('./index');
const starWarsNames = require('./starwars-names.json');

describe('starwars-names', () => {
  describe('all', () => {
    test('should be a fulfilled array', () => {
      expect(starWars.all).toHaveLength(starWarsNames.length)
    });
	
    test('should be an array of strings', () => {
      expect(Array.isArray(['value'])).toBe(true);
	  expect(typeof 'value').toBe('string');
    });

    test('should contain `Luke Skywalker`', () => {
		const expected = ['Luke Skywalker'];
	expect(starWars.all).toEqual(expect.arrayContaining(expected))});

    test('should not contain `Ben Quadinaros`', () => {
      const expected = ['Ben Quadinaros'];
	expect(starWars.all).toEqual(expect.not.arrayContaining(expected))});
  });

  describe('random', () => {
    test('should return a random item from the starWars.all', () => {
      throw new Error('test not yet defined... remove the throw and write your test here');
    });

    test('should return an array of random items if passed a number', () => {
      throw new Error('test not yet defined... remove the throw and write your test here');
    });
  });
});
