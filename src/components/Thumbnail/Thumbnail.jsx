// Styles:
import { Image } from './Thumbnail.styles';
// Routing:
import { Link } from 'react-router-dom';

const Thumbnail = ({ imageSrc, movieId, isClickable }) => {
  return (
    <div>
      { isClickable
        ? (
          <Link to={`/${movieId}`}>
            <Image src={imageSrc} alt='movie-thumbnail' />
          </Link>
        )
        : (
          <Image src={imageSrc} alt='movie-thumbnail' />
        )
      }
    </div>
  );
};

export default Thumbnail;
