// Components:
import BreadCrumb from './BreadCrumb/BreadCrumb';         //
import Grid from './Grid/Grid';
import Spinner from './Spinner/Spinner';
// Image:
import NoImage from '../assets/no_image.jpg';
// Config:
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
// Hooks:
import { useMovieDataFetch } from '../hooks/useMovieDataFetch';
import { useParams } from 'react-router-dom';

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, isLoading, error } = useMovieDataFetch(movieId);

  console.log(movie);

  return (
    <>
      <div>Movie</div>
    </>
  );
};

export default Movie;