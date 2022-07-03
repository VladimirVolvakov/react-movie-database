// Hooks:
import { useEffect, useState } from 'react';
import { useHomeFetchMovies } from '../hooks/useHomeFetchMovies';
// Config:
import { BACKDROP_SIZE, POSTER_SIZE, IMAGE_BASE_URL } from '../config';
// API:
import API from '../API';
// Component:
import Grid from './Grid/Grid';
import HeroImage from './HeroImage/HeroImage';
// Image:
import NoImage from '../assets/no_image.jpg';

const Home = () => {
  // Take pieces of state from custom hook:
  const { state, isLoading, error } = useHomeFetchMovies();

  return (
    <>
      { state.results[0]
        && <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
            text={`${state.results[0].overview}`}
            title={`${state.results[0].original_title}`}
          />
      }
      <Grid header='Popular Movies'>
        { state.results.map((movie, index) => (
          <div key={index}>{movie.title}</div>
        )) }
      </Grid>
    </>
  );
};

export default Home;