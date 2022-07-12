// Styles:
import { Image } from './Thumbnail.styles';
// Routing:
import { Link } from 'react-router-dom';
// Props type check:
import PropTypes from 'prop-types';

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

Thumbnail.propTypes = {
  imageSrc: PropTypes.string,
  movieId: PropTypes.number,
  isClickable: PropTypes.bool,
};

export default Thumbnail;
