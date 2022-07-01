// Hook:
import { useState } from 'react';
// Config:
import { BACKDROP_SIZE, POSTER_SIZE, IMAGE_BASE_URL } from '../config';
// Image:
import NoImage from '../assets/no_image.jpg';

const Home = () => {
  const [state, setState] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div>Home</div>
  );
};

export default Home;