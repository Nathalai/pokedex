import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import { capitalizeFirstLetter } from '../../utils/utils';
// import CardActions from '@mui/material/CardActions';

export default function PokemonCard({ pokemon }) {
  const [pokemonImageUrl, setPokemonImageUrl] = useState([]);

  useEffect(() => {
    const getPokemonImageUrl = () => {
      const url = pokemon.url;
      axios
        .get(url)
        .then((res) => {
          setPokemonImageUrl(res.data.sprites.front_default);
        })
        .catch((err) => console.log(err));
    };
    getPokemonImageUrl();
  }, [pokemon.url]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image={pokemonImageUrl}
          alt={`imagem frontal de ${pokemon.name}`}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {capitalizeFirstLetter(pokemon.name)}
          </Typography>
          {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  );
}
