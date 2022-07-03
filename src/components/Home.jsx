// Hooks:
import { useEffect, useState } from 'react';
import { useHomeFetchMovies } from '../hooks/useHomeFetchMovies';     //
// Config:
import { BACKDROP_SIZE, POSTER_SIZE, IMAGE_BASE_URL } from '../config';
// API:
import API from '../API';
// Image:
import NoImage from '../assets/no_image.jpg';

const Home = () => {
  // Take pieces of state from custom hook:
  const { state, isLoading, error } = useHomeFetchMovies();
  console.log(state);

  return (
    <div>Home</div>
  );
};

export default Home;