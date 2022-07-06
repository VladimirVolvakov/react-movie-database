// Hooks:
import { useEffect, useState } from 'react';
// API:
import API from '../API';

// Create an initial state:
const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0
};

export const useHomeFetchMovies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [state, setState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  // Get movies from the DB:
  const fetchMovies = async (page, searchTerm = '') => {
    try {
      setIsLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);

      setState(prevState => ({
        ...movies,
        results:
          (page > 1) ? [...prevState.results, ...movies.results] : [...movies.results]
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

  return { state, isLoading, error, setSearchQuery };
}