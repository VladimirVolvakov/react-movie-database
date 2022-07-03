// Hook:
import { useEffect, useState } from 'react';
// Config:
import { BACKDROP_SIZE, POSTER_SIZE, IMAGE_BASE_URL } from '../config';
// API:
import API from '../API';
// Image:
import NoImage from '../assets/no_image.jpg';

const Home = () => {
  const [state, setState] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  // Get movies from the DB:
  const fetchMovies = async (page, searchTerm = '') => {
    try {
      setIsLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);

      setState(prevState => ({
        ...movies,
        results: (page > 1) ? [...prevState.results, ...movies.results] : [...movies.results]
      }));
    } catch (error) {
      setError(true);
    }

    setIsLoading(false);
  };

  // Initial render of movies:
  useEffect(() => {
    fetchMovies(1);
  }, []);

  return (
    <div>Home</div>
  );
};

export default Home;