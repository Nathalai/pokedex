import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container } from '@mui/system';
import { Grid } from '@mui/material';

import NavBar from '../components/Navbar';
import PokemonCard from '../components/PokemonCard';

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
      .then((res) => {
        setPokemons(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <NavBar />
      <Container maxWidth='false'>
        <Grid
          container
          spacing={2}
          direction='row'
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {pokemons.map((pokemon) => (
            <Grid key={pokemon.name} size={4}>
              <PokemonCard pokemon={pokemon} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
