// Components:
import BreadCrumb from './BreadCrumb/BreadCrumb';
import Grid from './Grid/Grid';
import MovieInfo from './MovieInfo/MovieInfo';
import MovieInfoBar from './MovieInfoBar/MovieInfoBar';
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

  if (isLoading) {
    return <Spinner />
  };

  if (error) {
    return <div>Oops... Something went wrong...</div>
  };

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
    </>
  );
};

export default Movie;