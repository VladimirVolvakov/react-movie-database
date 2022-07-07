// Hooks:
import { useEffect, useState } from "react";
// API:
import API from "../API";

export const useMovieDataFetch = (movieId) => {
  const [state, setState] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        
        // Get movie data:
        const movie = await API.fetchMovie(movieId);
        // Get credits:
        const credits = await API.fetchCredits(movieId);
        // Get directors from credits:
        const directors = credits.crew.filter(crewMember => crewMember.job === 'Director');

        setState({
          ...movie,
          actors: credits.cast,
          directors
        });

        setIsLoading(false);
      } catch (error) {
        setError(true);
      };
    };
  }, [movieId]);

  return { state, isLoading, error };
};