// Component:
import Thumbnail from '../Thumbnail/Thumbnail';
// Styles:
import { Wrapper, Content, Text } from './MovieInfo.styles';
// Config:
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
// Image:
import NoImage from '../../assets/no_image.jpg';

const MovieInfo = ({ movie }) => {
  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumbnail 
          imageSrc={
            movie.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
            : NoImage
          }  
          isClickable={false}
        />
        <Text>
          <h1>{ movie.title }</h1>

          <h3>GENRE{ movie.genres.length > 1 ? 'S': '' }</h3>
          { movie.genres.map((genre, index) => (<span key={index}>{genre.name}, </span>)) }

          <h3>PLOT</h3>
          <p>{ movie.overview }</p>

          <div className='directors'>
            <div>
              <h3>RATING</h3>
              <div className="rating">{ movie.vote_average }</div>
            </div>
            <div className='director'>
              <h3>DIRECTOR{ movie.directors.length > 1 ? 'S' : '' }</h3>
              { movie.directors.map((director, index) => (<p key={index}>{director.name}</p>)) }
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default MovieInfo;