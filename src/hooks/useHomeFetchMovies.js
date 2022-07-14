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
  const [isLoadingMoreMovies, setIsLoadingMoreMovies] = useState(false);

  // Get movies from the DB:
  const fetchMovies = async (page, searchQuery = '') => {
    try {
      setIsLoading(true);

      const movies = await API.fetchMovies(searchQuery, page);

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

  // Initial render and search of movies:
  useEffect(() => {
    // Wipe the old state before making new search:
    setState(initialState);

    fetchMovies(1, searchQuery);
  }, [searchQuery]);

  // Load more movies:
  useEffect(() => {
    if (!isLoadingMoreMovies) return;

    fetchMovies(state.page + 1, searchQuery);
    setIsLoadingMoreMovies(false);
  }, [isLoadingMoreMovies, searchQuery, state.page]);

  return { 
    state, 
    isLoading, 
    error, 
    searchQuery, 
    setSearchQuery, 
    setIsLoadingMoreMovies
  };
};