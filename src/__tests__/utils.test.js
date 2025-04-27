import {
  capitalizeFirstLetter,
  filterPokemonsByType,
  getPokemonNumber,
  sortPokemonsByName,
} from '../utils/utils';

test('capitalizes the first letter of a string', () => {
  expect(capitalizeFirstLetter('pikachu')).toBe('Pikachu');
  expect(capitalizeFirstLetter('bulbasaur')).toBe('Bulbasaur');
});

describe('filterPokemonsByType', () => {
  const pokemons = [
    { name: 'charmander', types: [{ type: { name: 'fire' } }] },
    { name: 'squirtle', types: [{ type: { name: 'water' } }] },
    { name: 'bulbasaur', types: [{ type: { name: 'grass' } }] },
  ];

  it('should return only fire type Pokémon', () => {
    const result = filterPokemonsByType(pokemons, 'fire');
    expect(result).toEqual([
      { name: 'charmander', types: [{ type: { name: 'fire' } }] },
    ]);
  });

  it('should return only water type Pokémon', () => {
    const result = filterPokemonsByType(pokemons, 'water');
    expect(result).toEqual([
      { name: 'squirtle', types: [{ type: { name: 'water' } }] },
    ]);
  });

  it('should return an empty array if no Pokémon matches the type', () => {
    const result = filterPokemonsByType(pokemons, 'electric');
    expect(result).toEqual([]);
  });
});

describe('getPokemonNumber', () => {
  it('should return the correct Pokémon number from the URL', () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/25/';
    const result = getPokemonNumber(url);
    expect(result).toBe('25');
  });

  it('should return the correct Pokémon number when URL has multiple parts', () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/151/';
    const result = getPokemonNumber(url);
    expect(result).toBe('151');
  });

  it('should handle URLs with no Pokémon number', () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    const result = getPokemonNumber(url);
    expect(result).toBe('');
  });
});

describe('sortPokemonsByName', () => {
  const pokemons = [
    { name: 'charmander' },
    { name: 'bulbasaur' },
    { name: 'squirtle' },
  ];

  it('should sort Pokémon by name in alphabetical order', () => {
    const result = sortPokemonsByName(pokemons);
    expect(result).toEqual([
      { name: 'bulbasaur' },
      { name: 'charmander' },
      { name: 'squirtle' },
    ]);
  });

  it('should handle an already sorted list', () => {
    const sortedPokemons = [
      { name: 'bulbasaur' },
      { name: 'charmander' },
      { name: 'squirtle' },
    ];
    const result = sortPokemonsByName(sortedPokemons);
    expect(result).toEqual(sortedPokemons);
  });

  it('should handle an empty list of Pokémon', () => {
    const result = sortPokemonsByName([]);
    expect(result).toEqual([]);
  });
});
