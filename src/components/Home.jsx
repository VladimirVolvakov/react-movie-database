// Hooks:
import { useHomeFetchMovies } from '../hooks/useHomeFetchMovies';
// Config:
import { BACKDROP_SIZE, POSTER_SIZE, IMAGE_BASE_URL } from '../config';
// Components:
import Grid from './Grid/Grid';
import HeroImage from './HeroImage/HeroImage';
import LoadMoreButton from './LoadMoreButton/LoadMoreButton';
import SearchBar from './SearchBar/SearchBar';
import { Spinner } from './Spinner/Spinner.styles';
import Thumbnail from './Thumbnail/Thumbnail';
// Image:
import NoImage from '../assets/no_image.jpg';

const Home = () => {
  // Take pieces of state from custom hook:
  const { 
    state, 
    isLoading, 
    error, 
    searchQuery, 
    setSearchQuery, 
    setIsLoadingMoreMovies
  } = useHomeFetchMovies();

  if (error) return (<div>Oops... Something went wrong...</div>);

  return (
    <>
      { !searchQuery
        && state.results[0]
        && <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
            text={`${state.results[0].overview}`}
            title={`${state.results[0].original_title}`}
          />
      }
      <SearchBar setSearchQuery={setSearchQuery} />
      <Grid header={ !searchQuery ? 'Popular Movies' : 'Search Result'}>
        { state.results.map((movie, index) => (
          <Thumbnail
            key={index}
            isClickable
            imageSrc={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}/${movie.poster_path}`
                : NoImage
            }
            movieId={movie.id}
          />
        )) }
      </Grid>
      { isLoading && <Spinner /> }
      { (state.page < state.total_pages) && !isLoading && (
        <LoadMoreButton 
          text='Load More' 
          callback={() => setIsLoadingMoreMovies(true)}
        />
      ) }
    </>
  );
};

export default Home;