export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const filterPokemonsByType = (pokemons, type) => {
  return pokemons.filter((pokemon) =>
    pokemon.types.some((t) => t.type.name === type)
  );
};

export const getPokemonNumber = (url) => {
  const urlParts = url.split('/');
  const pokemonNumber = urlParts[urlParts.length - 2];
  return isNaN(pokemonNumber) ? '' : pokemonNumber;
};

export const sortPokemonsByName = (pokemons) => {
  return pokemons.sort((a, b) => a.name.localeCompare(b.name));
};
