import React from 'react';

import { Container } from '@mui/system';
import { Grid } from '@mui/material';

import NavBar from '../components/Navbar';
import PokemonCard from '../components/PokemonCard';

export const Home = () => {
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
          <Grid size={3}>
            <PokemonCard />
          </Grid>
          <Grid size={3}>
            <PokemonCard />
          </Grid>
          <Grid size={3}>
            <PokemonCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
